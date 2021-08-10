const Discord = require('discord.js');
const client = new Discord.Client();
const keepAlive = require("./server")
const prefix = "+";

// ======== Ready Log ========
client.on ("ready", () => {
    
    console.log('The Bot Is Ready!');
    client.user.setPresence({
      status: 'ONLINE', // Can Be ONLINE, DND, IDLE, INVISBLE
      activity: {
          name: 'Truth Or Dare | +help',
          type: 'PLAYING', // Can Be WHATCHING, LISTENING
      }
  })
  }); 
// ======== Code ========

client.on("message", async (message) => {
  //help cmd
  if (message.content === `${prefix}help`) {
    const help = new Discord.MessageEmbed()
      .setColor("#72dfa3")
      .setTitle(`Truth Or Dare`)
      .addFields(
        { name: "``+help``", value: "For help" },
        { name: "``+t``", value: "For Truth" },
        { name: "``+d``", value: "For Your Dare" },
        { name: "``Created By``", value: "AlpHa Coder [Labib Khan]" }
      )
      .setTimestamp()
      .setFooter(
        `${message.author.username}`,
        message.author.displayAvatarURL()
      );
    message.channel.send(help);
  }
  // truth cmd
  else if (message.content === `${prefix}t`) {
    const t = [
    "If you could be invisible, what is the first thing you would do?", 
    "What is a secret you kept from your parents?", 
    "What is the most embarrassing music you listen to?", 
    "What is one thing you wish you could change about yourself?",
    "Who is your secret crush?",
    "Who is the last person you creeped on social media?",
    "When was the last time you wet the bed?",
    "If a genie granted you three wishes, what would you ask for?",
    "What is your biggest regret?",
    "Where is the weirdest place you've ever gone to the bathroom?", 
    "What is the most food you've ever eaten in a single sitting?", 
    "Which player would survive a zombie apocalypse and which would be the first to go?", 
    "Reveal all the details of your first kiss.",
    "What excuse have you used before to get out plans with a friend?",
    "What's the longest you've ever slept?",
    "Read the last thing you sent your best friend or significant other out loud.",
    "What's your biggest pet peeve?",
    "When was the last time you lied?",
    "What five things would you bring to a desert island?",
    "What's the most embarrassing thing you ever did on a date?",
    "What is the craziest pickup line you've ever used?",
    "What animal do you think you most look like?",
    "How many selfies do you take a day?",
    "What is one thing you would stand in line for an hour for?",
    "When was the last time you cried?",
    "What's the longest time you've ever gone without showering?",
    "What's the most embarrassing top-played song on your phone?",
    "What was your favorite childhood show?",
    "If you could be a fictional character for a day, who would you choose?",
    "What's your biggest fear?",
    "What's one silly thing you can't live without?",
    "What is the weirdest trend you've ever participated in?",
    "If you could only listen to one song for the rest of your life, what would you choose?",
    "What person do you text the most?",
    "Have you ever been fired from a job?",
    "What is an instant deal breaker in a potential love interest?",
    "If you could only eat one thing for the rest of your life, what would you choose?",
    "What is the biggest lie you ever told your parents",
    "What's the worst physical pain you've ever experienced?",
    "Which player knows you the best?",
    "What's your favorite part of your body?",
    "What's the weirdest thing you've ever eaten?",
    "Have you ever gone skinny dipping?",
    "Tell us about the worst date you've ever been on?",
    "Who is your celebrity crush?",
    "What's the strangest dream you've ever had?",
    "What are the top three things you look for in a boyfriend/girlfriend?",
    "What is your worst habit?",
    "How many stuffed animals do you own?",
    "What is your biggest insecurity?"
    ];
    const truth = t[Math.floor(Math.random() * t.length)];
    message.channel.send(truth);
  }
  //dare cmd
  else if (message.content === `${prefix}d`) {
    const d = [
    "Do a free-style rap for the next minute.",
    "Let another person post a status on your behalf.",
    "Hand over your phone to another player who can send a single text saying anything they want to anyone they want.",
    "Let the other players go through your phone for one minute.",
    "Smell another player's armpit",
    "Smell another player's bare foot.",
    "Eat a bite of a banana peel",
    "Do an impression of another player until someone can figure out who it is.",
    "Take a selfie right now and send it here",
    "Say I love to your Crush",
    "Say pickles at the end of every sentence you say until it's your turn again.",
    "Imitate a YouTube star until another player guesses who you're portraying.",
    "Act like a chicken until your next turn.",
    "Talk in a British accent until your next turn.",
    "Call a friend, pretend it's their birthday, and send them Happy Birthday to You take a screenshot and send it here",
    "Name a famous person that looks like each player in the room.",
    "Show us your best dance moves.",
    "Eat a packet of hot sauce straight.",
    "Let another person draw a tattoo on your back with a permanent marker.",
    "Put on a blindfold and touch the other players' faces until you can figure out who's who.",
    "Serenade the person to your right for a full minute.",
    "Send first 6 emoji of yours.",
    "Let the other players redo your hairstyle.",
    "Gulp down a raw egg.",
    "Tell everyone about your last kiss.",
    "Pretend to date someone here for a day.",
    "Rate everyone here 1-10 in terms of looks.",
    "Make an owo emote for the group.",
    "Message someone you argued with and tell them that you're sorry.",
    "Have a matching pfp with who you like for 3 days.",
    "Screenshot your most played songs and show it to the group.",
    "Send the fifth person in your message history 20 seconds of keyboard spam Fake cry for the group",
    "Bark like a dog.",
    "Describe your crush, but don't give it away.",
    "Show the list of people in your DMs.",
    "Describe the object closest to you until the group guesses the object.",
    "Link everyone to the last song you listened to.",
    "Text the first six people in your message history 'a' and don't reply if they bring it up.",
    "Show everyone here the last 5 messages with the last person who you messaged/messaged you.",
    "Choose 3 people here and tell them the latest lie you told to them here (not in DMs).",
    "Text the third person in your message history 'last night was great' with a heart.",
    "If you're in any Group Chat, spam the last message you sent besides a command.",
    "Let the group decide your outfit for tomorrow.",
    "Tell everyone your honest opinion of the person who sent this command."
    ];
    const dare = d[Math.floor(Math.random() * d.length)];
    message.channel.send(dare);
  } else if(message.content.startsWith(prefix)){
    const invalid = new Discord.MessageEmbed()
      .setColor("#FF0000")
      .setTitle(`Truth Or Dare`)
      .addFields(
        {name: "Error", value: "Invalid Command. Type +help For Help" },
      );
      message.channel.send(invalid);
  }
});

const token = process.env.TOKEN;
keepAlive()
client.login(token);
