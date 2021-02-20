document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("input");
  // It goes
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
    addbotChat('If you’re an existing user, log in to your account here: <a href="/login"> Lets go! </a>');
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

  // 3

  $('#messages').on('click', '#no3', function(e) {
    adduserChat('I want to leave');
    addbotChat('Bye.');
  });

  
  $('#messages').on('click', '#yes3', function(e) {
    adduserChat('Maybe...?');
    addbotChat('Experiencing mental health problems is more common than you think! Even if you haven’t yet, it’s possible to still happen in the future. Many factors contribute to mental health problems, including: biological factors (genes or brain chemistry), life experiences (trauma or abuse) and/or family history of mental health problems. Mental health problems are common but help is available. People with mental health problems can get better and many recover completely. Have you ever spoken to anyone about your mental health? \
    <button id="yes4">Yes</button> <button id="no4">No</button>');
  });

  // 4

  $('#messages').on('click', '#no4', function(e) {
    adduserChat('I want to leave');
    addbotChat('Bye.');
  });

  
  $('#messages').on('click', '#yes4', function(e) {
    adduserChat('How do I know for sure?');
    addbotChat('I highly recommend that you do, especially if you have concerns about your mental health, it’s really important to talk to someone about it. Mental healthcare professionals, in particular, can help someone better understand and cope with thoughts, feelings and behaviors. They can also offer guidance and help improve a person’s ability to achieve life goals. They may also help assess and diagnose mental health conditions. \
    <button id="yes5">Yes</button> <button id="no6">No</button>');
  });

// 5

  $('#messages').on('click', '#no5', function(e) {
    adduserChat('I want to leave');
    addbotChat('Bye.');
  });

  
  $('#messages').on('click', '#yes5', function(e) {
    adduserChat('Okay...How do I know if i have mental health problems?');
    addbotChat('Experiencing one or more of the following feelings or behaviors can be an early warning sign of a problem: \
    <ul>\
    <li>Eating or sleeping too much or too little</li>\
    <li>Pulling away from people and usual activities</li>\
    <li>Having low or no energy</li>\
    <li>Feeling numb or like nothing matters</li>\
    <li>Having unexplained aches and pains</li>\
    <li>Feeling helpless or hopeless</li>\
    <li>Smoking, drinking, or using drugs more than usual</li>\
    <li>Feeling unusually confused, forgetful, on edge, angry, upset, worried, or scared</li>\
    <li>Yelling or fighting with family and friends</li>\
    <li>Experiencing severe mood swings that cause problems in relationships</li>\
    <li>Having persistent thoughts and memories you can\'t get out of your head</li>\
    <li>Hearing voices or believing things that are not true</li>\
    <li>Thinking of harming yourself or others</li>\
    <li>Inability to perform daily tasks like taking care of your kids or getting to work or school</li>\
    </ul> \
    People can experience different types of mental health problems. These problems can affect your thinking, mood, and behavior. \
    <button id="yes6">Yes</button> <button id="no7">No</button>');
  });

// 6 

$('#messages').on('click', '#no6', function(e) {
    adduserChat('I want to leave');
    addbotChat('Bye.');
  });

  
  $('#messages').on('click', '#yes6', function(e) {
    adduserChat('What are the different types?');
    addbotChat('There’s anxiety disorders, behavioural disorders, eating disorders, mental health and substance abuse disorders, mood disorders, obsessive-compulsive disorders, personality disorders, psychotic disorders, suicidal behaviour, and trauma and stress related disorders. But let’s talk more about anxiety! Do you know what anxiety is? \
    <button id="yes7">Yes</button> <button id="no7">No</button>');
  });

// 7 

$('#messages').on('click', '#no7', function(e) {
    adduserChat('I want to leave');
    addbotChat('Bye.');
  });

  
  $('#messages').on('click', '#yes7', function(e) {
    adduserChat('I’ve heard of the term before. What is it?');
    addbotChat('Great! Let’s learn more about it. As a general introduction, let’s watch this video together to get a better understanding of what anxiety is and its effects in your body. <a target="_blank" href="https://www.youtube.com/watch?v=BVJkf8IuRjE">https://www.youtube.com/watch?v=BVJkf8IuRjE</a> What did you think of that video? \
    <button id="yes8">Yes</button> <button id="no8">No</button>');
  });

// 8 

$('#messages').on('click', '#no8', function(e) {
    adduserChat('I want to leave');
    addbotChat('Bye.');
  });

  
  $('#messages').on('click', '#yes8', function(e) {
    adduserChat('It was interesting! I want to learn more.');
    addbotChat('That’s great! Have you ever wondered if you have anxiety? \
    <button id="yes9">Yes</button> <button id="no9">No</button>');
  });

// 9 

$('#messages').on('click', '#no9', function(e) {
    adduserChat('I want to leave');
    addbotChat('Bye.');
  });

  
  $('#messages').on('click', '#yes9', function(e) {
    adduserChat('I suppose the thought has crossed my mind.');
    addbotChat('Did you know that you can actually measure your anxiety levels from your saliva? \
    <button id="yes10">Yes</button> <button id="no10">No</button>');
  });

// 10

$('#messages').on('click', '#no10', function(e) {
    adduserChat('I want to leave');
    addbotChat('Bye.');
  });

  
  $('#messages').on('click', '#yes10', function(e) {
    adduserChat('Huh??');
    addbotChat('When it comes to anxiety and stress, our central nervous system responds through the activation of the hypothalamic-pituitary-adrenal system. This means that our hypothalamus in our brain releases corticotropin-releasing hormones, signalling our pituitary glands to release adrenocorticotropic hormone, which finally signals the adrenal glands to release cortisol, the key player. A patient with anxiety experiences chronic stress, resulting in the persistent activation of the HPA system and impairment of cortisol to regulate its own production. Subsequently, the elevation of cortisol levels will lead to dysregulation of other important biochemicals, through decreased estrogen and testosterone levels, and impaired signalling of the serotonin pathways. \
    <button id="yes11">Yes</button> <button id="no11">No</button>');
  });

// 11

$('#messages').on('click', '#no11', function(e) {
    adduserChat('I want to leave');
    addbotChat('Bye.');
  });

  
  $('#messages').on('click', '#yes11', function(e) {
    adduserChat('So, how do you actually measure it?');
    addbotChat('Lucky for you, the aim of CortiCare is to provide you with the experience of giving you insight to your own salivary cortisol measurements and monitor your anxiety. Are you interested?  \
    <button id="yes12">Yes</button> <button id="no12">No</button>');
  });

// 12

$('#messages').on('click', '#no12', function(e) {
    adduserChat('No, thank you.');
    addbotChat('Okay, no worries. We’re sad to see you go but we hope you come back to CortiCare to learn more in the future.');
  });

  
  $('#messages').on('click', '#yes12', function(e) {
    adduserChat('Yes, sign me up!');
     addbotChat('This is so exciting! In order to get you started, please create an account here: <a href="/register"> Lets go! </a> ');
  });

   
  
  
  inputField.addEventListener("keydown", (e) => {
    if (e.key ==="Enter") {
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


// Button Effects (Not sure if we will use)

$.fn.boom = function(e) {
	var colors = [
		'#ffb3f6',
		'#7aa0ff',
		'#333',
		// '#FFD100',
		// '#FF9300',
		// '#FF7FA4'
	];
	var shapes = [
		'<polygon class="star" points="21,0,28.053423027509677,11.29179606750063,40.97218684219823,14.510643118126104,32.412678195541844,24.70820393249937,33.34349029814194,37.989356881873896,21,33,8.656509701858067,37.989356881873896,9.587321804458158,24.70820393249937,1.0278131578017735,14.510643118126108,13.94657697249032,11.291796067500632"></polygon>', 
		// '<path class="circle" d="m 20 1 a 1 1 0 0 0 0 25 a 1 1 0 0 0 0 -25"></path>',
		'<polygon class="other-star" points="18,0,22.242640687119284,13.757359312880714,36,18,22.242640687119284,22.242640687119284,18.000000000000004,36,13.757359312880716,22.242640687119284,0,18.000000000000004,13.757359312880714,13.757359312880716"></polygon>',
		'<polygon class="diamond" points="18,0,27.192388155425117,8.80761184457488,36,18,27.19238815542512,27.192388155425117,18.000000000000004,36,8.807611844574883,27.19238815542512,0,18.000000000000004,8.80761184457488,8.807611844574884"></polygon>'
	];

	var btn = $(this);
	var group = [];
	var num = Math.floor(Math.random() * 50) + 30;

	for(i = 0; i < num; i++) {
		var randBG = Math.floor(Math.random() * colors.length);
		var getShape = Math.floor(Math.random() * shapes.length);
		var c = Math.floor(Math.random() * 10) + 5;
		var scale = Math.floor(Math.random() * (8 - 4 + 1)) + 4;
		var x = Math.floor(Math.random() * (150 + 100)) - 100;
		var y = Math.floor(Math.random() * (150 + 100)) - 100;
		var sec = Math.floor(Math.random() * 1700) + 1000;
		var cir = $('<div class="cir"></div>');
		var shape = $('<svg class="shape">'+shapes[getShape]+'</svg>');
		
		shape.css({
			top: e.pageY - btn.offset().top + 20,
			left: e.pageX - btn.offset().left + 40,
			'transform': 'scale(0.'+scale+')',
			'transition': sec + 'ms',
			'fill': colors[randBG]
		});

		btn.siblings('.btn-particles').append(shape);

		group.push({shape: shape, x: x, y: y});
	}
	
	for (var a = 0; a < group.length; a++) {
		var shape = group[a].shape;
		var x = group[a].x, y = group[a].y;
		shape.css({
			left: x + 50,
			top: y + 15,
			'transform': 'scale(0)'
		});
	}
	
	setTimeout(function() {
		for (var b = 0; b < group.length; b++) {
			var shape = group[b].shape;
			shape.remove();
		}
		group = [];
	}, 2000);

}	

$(function() {
	$(document).on('click', '.btn', function(e) {
		$(this).boom(e);
	});

});


