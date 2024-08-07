monogatari.script ({
	// The Game Continues!!
	'LevelOne': [
		'stop music',
		'play sound alarm',
		'show scene #000000 with fadeIn',
		'y Damn, overslept again....',
		"y Hmm... looks like I am running low on funds.",
		"y All my sponsors and Twitch subs have abandoned me.... But why?",
		"y Maybe I should stream and get some donos...",
		'show scene bedroommessy with fadeIn',
		"y Well... maybe I will stream later.",
		"y I have got far more important things to do!",
		'jump LevelOneChoiceMenu',
	],

	'LevelOneChoiceMenu': [
		'stop music',
		'show background bedroommessy',
		{'Conditional': {
		    'Condition': function () {
		        return !monogatari.storage('playedSubway') && !monogatari.storage('playedWalk') && !monogatari.storage('playedDate'); // && !monogatari.storage('playedController');
		    },
		    'False': 'next',
		    'True': "y Enough fooling around... it's time to stream! Chat needs me!"
		}},

	    {
	        'Choice': {
	            'Dialog': 'y What should I do?',
	            'Subway': {
	                'Text': 'Get Subway',
	                'Do': 'jump SubwayPath',
	                'Condition': function () {
	                    return monogatari.storage('playedSubway');
	                }
	            },
	            'Walk Bluey': {
	                'Text': 'Walk Bluey',
	                'Do': 'jump WalkPath',
	                'Condition': function () {
	                    return monogatari.storage('playedWalk');
	                }
	            },
	            'Date': {
	                'Text': 'Go on a date',
	                'Do': 'jump DatePath',
	                'Condition': function () {
	                    return monogatari.storage('playedDate');
	                }
	            },
	            'Next Level': { 
	                'Text': 'Start stream',
	                'Do': 'jump PreLevelTwo',
	                'Condition': function () { // Check if all L1 activities have been played
	                    return !monogatari.storage('playedSubway') && !monogatari.storage('playedWalk') && !monogatari.storage('playedDate'); // && !monogatari.storage('playedController');
	            	}
            	}
	        },
	    },
	],

	'DatePath': [
		function markDateAsPlayed() {
		    monogatari.storage({
		        playedDate: false
		    });
		},
		'show scene #000000 with fadeIn',
		'Heading to my date...',
		'show scene house with fadeIn',
		'play music date1 with fade 2',
		"y Hmm, she is running late...",
		"y Maybe I should have brushed my teeth and showered this week...",
		'y ...',
		"y Ahh, there she is! Our GF!",
		'show character foosballchan Normal center with fadeIn',
		"foosballchan Nemzy-kun! I missed you so much since our last match!",
		"y Yeah, my arse still hurts after that one...",
		"foosballchan So, what should we do today Nemz-chan?",
		'stop music date1 with fade 2',
		'Suddenly, you are confronted...',
		'play music date2 with fade 2',
		'hide character foosballchan with fadeOut',
		'show character gravychan Normal center with fadeIn',
		'gravychan Who is this woman Nemz-san?',
		"gravychan Don't you remember our special night? That special night?!",
		'hide character gravychan with fadeOut',
		'show character skittleschan Normal with fadeIn',
		'skittleschan Nemz-senpai, y-you baka! How could you? After the places you put me...',
		'hide character skittleschan with fadeOut',
		'show character scissorschan Normal  with fadeIn',
		"scissorschan I didn't know what we did was physically possible, Nemz-sensei...",
		'hide character scissorschan with fadeOut',
		'show character batchan Normal with fadeIn',
		"batchan And after I gave you a batjob...",
		"y Wait, wait! Ladies, I can explain!",
		'hide character batchan Normal with fadeOut',
		"Nemz got anxiety and ran away.",
		'show scene #000000 with fadeIn',
		'stop music date2 with fade 2',
		'...',
		'y Wow! Glad I got out of there in time.',
		'y ...I wonder what my sister is up to...?',
		'jump LevelOneChoiceMenu'
	],

	'WalkPath': [
		function markWalkAsPlayed() {
		    monogatari.storage({
		        playedWalk: false
		    });
		},
		'show scene #000000 with fadeIn',
		"y Bluey, have you finished your estrogen pills yet?", 
		"y All done? Let's go for a walk!",
		'play music oblivion',
		'show scene Park with fadeIn',
		'show character bluey Normal center with fadeIn',
		"y What a beautiful day! Isn't that right Bluey?",
		'play sound dogbark3',
		"bluey Woof!",
		'hide character bluey with fadeOut',
		'show character walker Normal with fadeIn at center',
		"Down the path, a woman walking a dog is heading towards you...",
		"y (Oh my god, she's beautiful.... what should I do?)", 
		'show character walker Normal move character-centerright duration 1s',
		{'Choice': {
			'Dialog': "What should I do?",
			'Rizz': {
				'Text': 'Rizz',
				'Do': "jump DogRizz",
			},
			'Fight': {
				'Text': 'Fight',
				'Do': 'jump DogFight'
			},
		}
		},
		
	],

	'DogFight': [
		'hide character walker with fadeOut',
		'show character dog Normal with fadeIn',
		'play sound dogbark1',
		"dog Woof?",
		'y Think you are too good for me? I will show you!',
		'You wildly swing a haymaker, missing the dog completely.',
		'y I can kill a lynx!',
		'You collapse to the floor, pathetically.',
		'jump WalkEnd'
	],

	'DogRizz': [
		'hide character walker with fadeOut',
		'show character dog Normal with fadeIn',
		"y Wow you're gorgeous! Are you single?",
		'play sound dogbark1',
		"dog Woof?",
		"y I give really good strokes......",
		'hide character dog',
		'show character bluey Normal center with fadeIn',
		'play sound dogbark3',
		"bluey Woof?",
		'Bluey is getting jealous.',
		'hide character bluey with fadeOut',
		'show character dog Normal with fadeIn',
		"y (Sweating profusely)... I bet you love peanut butter...",
		'jump WalkEnd'
	],

	'WalkEnd':[
		'play sound dogbark2',
		"dog Whimper.... Woof! Woof!",
		'hide character dog',
		'play sound ds1womancry',
		'show character walker Mad center with fadeIn with shake',
		"walker Ahh! What is wrong with you?!",
		"walker Get away from Peppah, or I will call the police!",
		'show scene #000000 with fadeIn',
		"y Let's get out of here, B-Blowey...",
		'jump LevelOneChoiceMenu'
	],

	'SubwayPath': [
		function markSubwayAsPlayed() {
		    monogatari.storage({
		        playedSubway: false
		    });
		},
		'show scene #000000 with fadeIn',
		'Heading to Subway...',
		'play music subway loop',
		'show scene Subway with fadeIn',
		'y Hey, so I will have my usual please, but go easy on the southwest sauce this time---',
		'show character e Normal center with fadeIn',
		"e Sorry, I just started working here today, so I don't know your usual order...",
		'y Well, my name is Nemz. Kind of a big deal in here.',
		'y You will get used to seeing me around!',
		'show character e Mad center',
		'e Right...',
		'show character e Normal center',
		'e Okay Nemz, what is your usual?',
		'y Sigh, you better remember this....',
		"y Footlong turkey breast, pepperjack cheese, sweetcorn---",
		"y Italian bread - I don't want seeds because I'm not gay---",
		'show character e Mad center',
		'e ...',
		"y Toasted on the 6 inch setting please---",
		"y Oh, and nachos, a doughnut, a cookie, a pizza, hash browns, meatballs---",
		'hide character e Normal center with fadeOut',
		'stop music subway with fade 3',
		"Suddenly, you hear something behind you...",
		"play sound ds1moan1",
		"show character oldman Normal center with shake",
		"oldman Hnnnnnnnggghhhhhhhh!!!",
		'hide character oldman with fadeOut',
		'play sound womanshortscream',
		'show character e Mad with fadeIn with shake',
		"e Oh my God! That man is having a heart attack!",
		"e Can anyone help him?",
		'hide character e with fadeOut',
		'show character oldman Normal with fadeIn at character-centerleft',
		{
			'Choice': {
				'Dialog': "What should I do???",
				'Help': {
					'Text': 'Help Him',
					'Do': "jump SubwayHelp",
				},
				'TellAJoke': {
					'Text': 'Tell a Joke',
					'Do': 'jump SubwayJoke',
				},
			}
		},
		'show scene #000000 with fadeIn',
		'...',
		'jump LevelOneChoiceMenu'
	],

	'SubwayHelp': [
		'You perform CPR on the old man.',
		"play sound bonecrack",
		"play sound ds1moan2",
		'show character oldman Normal with shake',
		"oldman Agghhh!!!",
		'play sound flatline',
		"You break his ribs. He was killed instantly.",
		'jump SubwayEnd',
	],

	'SubwayJoke': [
		'hide character oldman with fadeOut',
		'show character e Mad center with fadeIn',
		'e Does anyone know CPR?!',
		'y I do! In fact, I know the whole alphabet!',
		'play sound laughcrowd',
		'show character e Normal center',
		"Everyone in Subway laughed at your joke. No one died of cringe.",
		'...',
		'stop music subway',
		'hide character e with fadeOut',
		'play sound flatline',
		'show character oldman Normal center with fadeIn',
		'The old man has died.',
		'jump SubwayEnd',
	],

	'SubwayEnd': [
		'hide character oldman with fadeOut',
		'...',
		'show character e Mad center with fadeIn',
		'e ...',
		'y ...',
		'e ...',
		'y ...',
		'e ...',
		"y Is my fucking order ready to go yet?!",
		'show scene #000000 with fadeIn',
		'y Finally! Took her long enough... I better head back home.',
		'jump LevelOneChoiceMenu'
	],

	'PreLevelTwo': [
		'y I should do some vocal practice before I start streaming...',
		"y Time to practice my intro!",
		'play sound compintro',
		'y ***Yoooooooooooooooooooooooo noises***',
		'stop sound compintro',
		'y Time to practice my Charews!',
		'play sound compcharew',
		'y ***Chaaaarrreeeewwwwwwwwwwww noises***',
		'stop sound compcharew',
		"y Time to practice my iconic moans!",
		'play sound compmoan',
		'y ***Nonce noises***',
		'stop sound compmoan',
		"y Nice, all warmed up now!",
		"y Looks like I am ready to start my stream...",
		'play sound vineboom',
		"y What?! My stream key has been stolen!",
		'play sound vineboom',
		"y Who could have taken it???",
		'play sound doorknock',
		"???: Keep it down Ashley! And it's dinner time!",
		"y Okay Mum, I will be down in a minute!",
		'show scene #000000 with fadeIn',
		"y I guess I will try to find my stream key tomorrow...",
		'...',
		'jump LevelTwo'
	],
});
