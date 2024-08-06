monogatari.script ({
	// The Game Continues!!
	'LevelThree': [
		'stop music',
		'play sound vineboom',
		'y It was you all along?!',
		'play music gael8bit with loop',
		'show scene lothric with fadeIn',
		'show character zero Normal with fadeIn',
		'y Zero!!!',
		'y Give me my stream key back, you villain!',
		'y I thought we were friends?',
		'show character zero Mad',
		'zero I will do great things with your stream key.',
		'zero You stream five times a year, whats the big deal anyway?',
		'hide character zero',
		'show character hob Sword at right with fadeIn',
		'hob Not on our watch!',
		'show character dist BF at left with fadeIn',
		'dist We will stop you Zero!',
		'show character ela Mad with fadeIn',
		'ela Friendship is more important than streaming!',
		'ela Zero, give Nemz back his stream key NOW!',
		'hide character ela',
		'hide character dist',
		'hide character hob',
		'show character zero Mario with fadeIn',
		"zero Oh no, I have been defeated by the power of friendship.",
		"zero I give up. Let's be friends again, Nemz.",
		"y Okay.",
		'hide character zero',
		'show image elazerocar',
		'The streamers put Zero into the boot of a car and drove away.',
		'He was never seen again.',
		'stop music',
		'play music victory loop',
		'hide image elazerocar',
		'show character hob Normal at right',
		'show character dist Normal at left',
		'show character ela Normal',
		'y Wow, thank you guys! You really are my bestest streamer friends in the whole world.',
		'jump Sponsors',
	],

	'Sponsors' : [
		'hide character ela',
		'hide character dist',
		'hide character hob',
		'show scene #000000 with fadeIn',
		"y What's this...? My sponsors are coming back?",
		'show character hellofresh Normal',
		'hellofresh We forgive you for saying our food gives customers gastroenteritis!',
		'hide character hellofresh',
		'show character nordvpn Normal',
		'nordvpn No worries about calling us "Nord Korea".',
		'hide character nordvpn',
		'show character displate Normal',
		'displate We will forget that you said a Displate killed your dog.',
		'hide character displate',
		'show character herowars Normal',
		"herowars Thanks for clarifying we aren't a crypto miner scam Nemz. Clan it up!",
		'hide character herowars',
		'y Ahh, everything is finally back to normal. I guess I should finally start my stream.',
		'y Time to stick to a normal streaming schedule! Three hour streams, twice a week, at least!',
		'y I will finally do the DS3 All Achievements run!',
		'y Unless....?',
		'stop music',
		'jump Ending',
	],

	'Ending': [
		'show scene #000000 with fadeIn',
		function markUnplayed() {
		    monogatari.storage({
			    playedSubway: true,
			    playedWalk: true,
			    playedVocal: true,
			    playedController: true,
			    playedTidy: true,
			    playedDist: true,
			    playedEla: true,
			    playedHob: true,
			    playedDate: true,
		    });
		},
		'show image titlescreen at image-centertop with fadeIn',
		'play music londoncalling8bit loop',
		{
			'Choice': {
				'Dialog': "undank Thank you for playing!", // Start a new game or check out the bonus?",
				'New Game': {
					'Text': 'New Game',
					'Do': "jump TrueStart",
				},
				'Credits': {
					'Text': 'Credits',
					'Do': "jump Credits",
				},
/*				'Bonus': {
					'Text': 'Bonus???',
					'Do': "jump Bonus",
				},*/
			}
		},
	],
	'Bonus' :[
		'stop music',
		'show video canumikasa immersive with close',
		'jump Ending',
	],
	'Credits' :[
		'show message Credits',
		'jump Ending',
	]
});
