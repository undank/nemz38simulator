monogatari.script ({
	'LevelTwo': [
		'stop music',
		'play sound alarm',
		'y Today is the day. I WILL find my stream key!',
		'show scene bedroommessy with fadeIn',
		'y I should gather some info from my souls streamer buddies.',
		'jump LevelTwoChoiceMenu',
	],

	'LevelTwoChoiceMenu': [
		'stop music',
		'show scene bedroommessy with fadeIn',
		{'Conditional': {
		    'Condition': function () {
		        return !monogatari.storage('playedDist') && !monogatari.storage('playedEla') && !monogatari.storage('playedHob');
		    },
		    'False': 'next',
		    'True': "y How could I have been so blind.... I know who is behind this!"
		}},

	    {
	        'Choice': {
	            'Dialog': 'y What should I do?',
	            'Dist': {
	                'Text': 'Distortion2',
	                'Do': 'jump PathDist',
	                'Condition': function () {
	                    return monogatari.storage('playedDist');
	                }
	            },
	            'Ela': {
	                'Text': 'Elajjaz',
	                'Do': 'jump PathEla',
	                'Condition': function () {
	                    return monogatari.storage('playedEla');
	                }
	            },
	            'Hob': {
	                'Text': 'The_Happy_Hob',
	                'Do': 'jump PathHob',
	                'Condition': function () {
	                    return monogatari.storage('playedHob');
	                }
	            },
	            'Next Level': { 
	                'Text': 'Confront Culprit',
	                'Do': 'jump PreLevelThree',
	                'Condition': function () { // Check if all L2 activities have been played
	                    return !monogatari.storage('playedDist') && !monogatari.storage('playedEla') && !monogatari.storage('playedHob');
	            	}
            	}
	        },
	    },
	],

	'PathDist': [
		function markDistAsPlayed() {
		    monogatari.storage({
		        playedDist: false
		    });
		},
		'show scene dist2twitch with fadeIn',
		'play music greenpath loop with fadeIn',
		'y Dist, help me! My stream key has been stolen.',
		'show character dist Normal with fadeIn',
		'dist Hey Nemz. Sorry, but I am extremely busy at the moment.',
		'show character dist BF with fadeIn',
		'dist I am on vacation, and I just started a 10 hour sponsored stream.',
		'y You have to help me out, come on man. It would be free content!',
		'dist Hmm, okay then. In that case I will help you...!',
		'stop music greenpath',
		'play sound vineboom',
		'show scene ERZip1 with fadeIn',
		'dist But only if you beat me in a ZIIIIIIPPPPPPing race!',
		"y ...!?",
		"y (I can't beat the 'Master of ZIPPPPing' in a fair fight... Time for my secret weapon...)",
		'play sound hack',
		'The payload has been activated.',
		'stop sound hack',
		'play sound windows10error',
		'show character bing Normal with shake',
		'dist My version of Bing search is out of date?!',
		"dist What the fuck is this?! I can't control my character!",
		'show scene ERZip2',
		'Nemz ZIPPPPSSSSS into a ravine and dies.',
		'show character dist Normal',
		'dist You got lucky this time, Nemz...',
		'dist I guess that counts as your win. Sure, I will help you out.',
		'jump LevelTwoChoiceMenu',
	],

	'PathEla': [
		function markElaAsPlayed() {
		    monogatari.storage({
		        playedEla: false
		    });
		},
		'play music sweden with fadeIn',
		'show scene elatwitch with fadeIn',
		'show character ela Normal with fadeIn',
		'ela Nemz, my love! Good to see you buddy. ',
		'ela By the way, I have 11k viewers. Meow.',
		"y Literally didn't ask, buddy...",
		'ela So, when are you moving into my giga myega streamer house?',
		'ela I have so many cool nightclubs to show you...',
		'y Uhh, soon, I promise. Can you help me get my stream key back?',
		"ela Sure...",
		"stop music sweden",
		'play music pizzaog with fadeIn',
		'show scene pizzabg with fadeIn',
		'show character ela Pizza with fadeIn',
		"ela ... But first, let's see who can eat these banana pizzas the fastest!",
		"stop music pizzaog",
		"show message Pizza at right",
		{
			'Choice': {
				'Dialog': "Did you win?",
				'HobWin': {
					'Text': 'Yes I Won',
					'Do': "jump ElaWin",
				},
				'HobLose': {
					'Text': 'No I Lost',
					'Do': 'jump ElaLose',
				},
			}
		},
	],

	'ElaWin' : [
		'play music pizzaog with fadeIn',
		"ela Dang! I have been defeated by the Pizza Predator of Essex!",
		"ela Seriously though, you ate that really quickly...",
		"ela There's no shame...",
		"ela Anyway, sure, I will help you out.",
		'jump LevelTwoChoiceMenu',
	],

	'ElaLose' : [
		'play music pizzaog with fadeIn',
		"ela Haha! You didn't stand a chance against the Swedish Slice Swallower!",
		"ela Ahh, that was satisfying. I am in a good mood, so I will help you out anyway.",

		'jump LevelTwoChoiceMenu',
	],

	'PathHob': [
		function markHobAsPlayed() {
		    monogatari.storage({
		        playedHob: false
		    });
		},
		'play music sekiro with fadeIn',
		'show scene hobtwitch with fadeIn',
		'show character hob Normal with fadeIn',
		'hob What do you want Nemz?',
		'hob I am very busy dealing with the God Run, my beautiful wife, and my many childen.',
		'y Hob, please! I have lost my stream key, can you help me?',
		'show character hob Sword with fadeIn',
		'hob Theres only one way I will help you...',
		'y ...!?',
		"stop music sekiro",
		'play music fifa with fadeIn',
		'show scene FIFA with fadeIn',
		'hob It is time for a FIFA showdown!',
		{
			'Choice': {
				'Dialog': "Hmm, what should I do?",
				'HobWin': {
					'Text': 'Destroy Hob',
					'Do': "jump HobLose",
				},
				'HobLose': {
					'Text': 'Let Hob Win',
					'Do': 'jump HobWin',
				},
			}
		},
		
	],

	'HobLose': [
		'play sound cr7',
		'Nemz beats Hob!',
		'Hob had 0% possession (hitless%)!',
		'show character hob Bald with fadeIn',
		'hob Wow, what a game! I was so inspired that I shaved my head!', 
		'hob I think I can finally beat the God Run now.',
		'hob Sure, I can help you out.',
		'jump LevelTwoChoiceMenu',
	],

	'HobWin': [
		'play sound messi',
		'Hob beats Nemz!',
		'show character hob Normal with fadeIn',
		'hob Wow Nemz, you suck at FIFA!',
		'stop sound messi',
		'hob You know what, I will help you out.',
		'hob But, as you lost, you need to do a forfeit.',
		'y ...!?',		
		'hob Time for us to have a little Hobcident...',
		'show scene #000000 with fadeIn',
		'stop music fifa with fadeOut',
		'...',
		"y ... I don't want to talk about it.",
		'jump LevelTwoChoiceMenu',
	],

	'PreLevelThree': [
		'jump LevelThree',
	],
});
