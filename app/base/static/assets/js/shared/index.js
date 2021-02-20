document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("input");
  // it goes
  addbotChat("Hi there! Are you new to CortiCare? <button id=\"yes1\"> Yes </button> <button id=\"no1\"> No </button>");
  
  // 1
  $('#messages').on('click', '#yes1', function(e) {
    adduserChat('Yes');
    addbotChat('Welcome! Let’s start a conversation about your mental health. We’ll spend the next few moments learning more about the importance of mental health and anxiety as well as its effects on your body. Are you ready to keep going? \
    <button id="yes2">Yes</button> <button id="no2">No</button>\
    ');
  });

  $('#messages').on('click', '#no1', function(e) {
    adduserChat('No');
    addbotChat('If you’re an existing user, log in to your account here: URL');
  });

  // 2
  $('#messages').on('click', '#yes2', function(e) {
    adduserChat('Yes');
    addbotChat('Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act. It also helps determine how we handle stress, relate to others, and make choices. Mental health is important at every stage of life, from childhood and adolescence through adulthood. Over the course of your life, have you felt like you’ve experienced mental health problems? \
    <button id="yes3">Yes</button> <button id="no3">No</button>');
  });

  $('#messages').on('click', '#no2', function(e) {
    adduserChat('No');
    addbotChat('Okay, no worries. We’re sad to see you go but we hope you come back to CortiCare to learn more in the future.');
  });

  // 3no

  $('#messages').on('click', '#no3', function(e) {
    adduserChat('Dont think so');
    addbotChat('That’s understandable. Even if you haven’t yet, it’s possible to still happen in the future. Many factors contribute to mental health problems, including: biological factors (genes or brain chemistry), life experiences (trauma or abuse) and/or family history of mental health problems. Mental health problems are common but help is available. People with mental health problems can get better and many recover completely. Have you ever spoken to anyone about your mental health? \
    <button id="yes4">Yes</button> <button id="no4">No</button>');
  });

  
  $('#messages').on('click', '#yes3', function(e) {
    adduserChat('Yes I have');
    addbotChat('Don’t fret. This is more common than you think!  Many factors contribute to mental health problems, including: biological factors (genes or brain chemistry), life experiences (trauma or abuse) and/or family history of mental health problems. Mental health problems are common but help is available. People with mental health problems can get better and many recover completely. Have you ever spoken to anyone about your mental health? \
    <button id="yes5">Yes</button> <button id="no5">No</button>');
  });


   
  
  
  inputField.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      let input = inputField.value;
      inputField.value = "";
      output(input);
    }
  });
  
});

function output(input) {
  let product;
  
  // Regex remove non word/space chars
  // Trim trailing whitespce
  // Remove digits - not sure if this is best
  // But solves problem of entering something like 'hi1'

  let text = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
  text = text
    .replace(/ a /g, " ")   // 'tell me a story' -> 'tell me story'
    .replace(/i feel /g, "")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "")
    .replace(/r u/g, "are you");
  
  if (compare(prompts, replies, text)) { 
    // Search for exact match in `prompts`
    product = compare(prompts, replies, text);
  } else if (text.match(/thank/gi)) {
    product = "You're welcome!"
  } else if (text.match(/(corona|covid|virus)/gi)) {
    // If no match, check if message contains `coronavirus`
    product = coronavirus[Math.floor(Math.random() * coronavirus.length)];
  } else {
    // If all else fails: random alternative
    product = alternative[Math.floor(Math.random() * alternative.length)];
  }
  
  // Update DOM
  addChat(input, product);
}

function compare(promptsArray, repliesArray, string) {
  let reply;
  let replyFound = false;
  for (let x = 0; x < promptsArray.length; x++) {
    for (let y = 0; y < promptsArray[x].length; y++) {
      if (promptsArray[x][y] === string) {
        let replies = repliesArray[x];
        reply = replies[Math.floor(Math.random() * replies.length)];
        replyFound = true;
        // Stop inner loop when input value matches prompts
        break;
      }
    }
    if (replyFound) {
      // Stop outer loop when reply is found instead of interating through the entire array
      break;
    }
  }
  return reply;
}


function addChat(input, product) {
  const messagesContainer = document.getElementById("messages");

  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.className = "user response";
  userDiv.innerHTML = `<img src="/static/assets/images/user.png" class="avatar"><span>${input}</span>`;
  messagesContainer.appendChild(userDiv);

  let botDiv = document.createElement("div");
  let botImg = document.createElement("img");
  let botText = document.createElement("span");
  botDiv.id = "bot";
  botImg.src = "/static/assets/images/bot-mini.png";
  botImg.className = "avatar";
  botDiv.className = "bot response";
  botText.innerText = "Typing...";
  botDiv.appendChild(botText);
  botDiv.appendChild(botImg);
  messagesContainer.appendChild(botDiv);
  // Keep messages at most recent
  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
  
  // Fake delay to seem "real"
  setTimeout(() => {
    botText.innerHTML = `${product}`;
    //textToSpeech(product)
  }, 1000
  )

}


function addbotChat(product) {
  const messagesContainer = document.getElementById("messages");

  let botDiv = document.createElement("div");
  let botImg = document.createElement("img");
  let botText = document.createElement("span");
  botDiv.id = "bot";
  botImg.src = "/static/assets/images/bot-mini.png";
  botImg.className = "avatar";
  botDiv.className = "bot response";
  botText.innerText = "Typing...";
  botDiv.appendChild(botText);
  botDiv.appendChild(botImg);
  messagesContainer.appendChild(botDiv);
  // Keep messages at most recent
  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
  
  // Fake delay to seem "real"
  setTimeout(() => {
    botText.innerHTML = `${product}`;
    //textToSpeech(product)
  }, 1000
  )

}

function adduserChat(input) {
  const messagesContainer = document.getElementById("messages");

  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.className = "user response";
  userDiv.innerHTML = `<img src="/static/assets/images/user.png" class="avatar"><span>${input}</span>`;
  messagesContainer.appendChild(userDiv);

}