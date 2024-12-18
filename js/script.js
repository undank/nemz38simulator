/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	},
	'Pizza': {
		title: '',
		subtitle: "Click the 'Close' button to launch the minigame in a new tab. Do NOT close the original tab or you will lose your progress. Don't worry, the link is very safe, you can trust me 😇",
		body: `
			<p><a href='https://undank.github.io/pizza-minigame/' target="_blank"</a></p>
		`
	},
	'Credits': {
		title: 'Credits',
		subtitle: "",
		body: `
	Made with Monogatari Visual Novel Engine - <a href="https://monogatari.io/" target="_blank">Link</a></br></br>
      Cheers to the following lads for helping: </br>
      dizzy, George C, dtimm, solaire, Ross, and Koss GIGACHAD</br>
		    <h5>Music List</h5> 
      
		    <ul>
		        <li>
		            Subway - Cooking Mama -
		            <a href="https://www.youtube.com/watch?v=2qFSavTxVwc" target="_blank">Listen here</a>
		        </li>
		        <li>
		            Date - PlateUp OST -
		            <a href="https://www.youtube.com/watch?v=7QGV9znW3AY" target="_blank">Listen here</a>
		        </li>
		        <li>
		            Walk - Oblivion - 
	      			<a href="https://www.youtube.com/watch?v=s9L9sNtv1-g" target="_blank">Listen here</a>
		        </li>
		        <li>
		            Dist - Hollow Knight - 
	      			<a href="https://www.youtube.com/watch?v=fWquuWkHVP4" target="_blank">Listen here</a>
		        </li>
		        <li>
		            Ela - Shiva - Flat Out - 
	      			<a href="https://www.youtube.com/watch?v=fbj0MU99j-U" target="_blank">Listen here</a>
		        </li>
		        <li>
		            Spiderman 2 Pizza -
		            <a href="https://www.youtube.com/watch?v=czTksCF6X8Y" target="_blank">Listen here</a>
		        </li>
		        <li>
		            Slave K***ht Gael 8bit -
		            <a href="https://www.youtube.com/watch?v=_h7gQDQPRB8" target="_blank">Listen here</a>
		        </li>
		        <li>
		            Victory - Final Fantasy 7 - 
	      			<a href="https://www.youtube.com/watch?v=rgUksX6eM0Y" target="_blank">Listen here</a>
		        </li>
		        <li>
		            The Clash - London Calling 8bit -
		            <a href="https://www.youtube.com/watch?v=IRqw_n7LSos" target="_blank">Listen here</a>
		        </li>
		        <li>
		            Bury the Light 8bit - original got deleted off YouTube - here's a backup -
		            <a href="https://github.com/undank/nemz38simulator/raw/main/assets/music/dmc5_burythelight_8bit.m4a" target="_blank">Download here</a>
		        </li>
		    </ul>
		`
	},
});



monogatari.action ('notification').notifications ({ // Define the notifications used in the game
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Nemzgatari VN Engine',
		icon: ''
	}
});

monogatari.action ('particles').particles ({ // Define the Particles JS Configurations used in the game
});

monogatari.action ('canvas').objects ({ // Define the canvas objects used in the game
});

monogatari.configuration ('credits', { // Credits of the people involved in the creation of this dogshit game
});

monogatari.assets ('gallery', { // Define the images that will be available on your game's image gallery
});

monogatari.assets ('music', { // Define the music used in the game.
	"mgs": "mgs.ogg",
	"birds": "birds.ogg",
	"subway": "subway.ogg",
	"date1": "date1.ogg",
	"date2": "date2.ogg",
	"oblivion": "oblivion.ogg",
	"fifa": "fifa.ogg",
	"dink": "dink.ogg",
	"winter": "winter.ogg",
	"sweden": "shiva.ogg",
	"sekiro": "sekiro.ogg",
	"pizzaog": "pizzaog.ogg",
	"greenpath": "greenpath.ogg",
	"burythelight8bit": "burythelight8bit.ogg",
	"londoncalling8bit": "londoncalling8bit.ogg",
	"gael8bit": "gael8bit.ogg",
	"victory": "victory2.m4a",
});

monogatari.assets ('voices', { // Define the voice files used in the game.
});

// Define the sounds used in the game.
monogatari.assets ('sounds', {
	"codeccall": "codeccall.wav",
	"codecopen": "codecopen.wav",
	"codecover": "codecover.wav",
	"dogbark1": "dogbark1.mp3",
	"dogbark2": "dogbark2.mp3",
	"dogbark3": "smalldogbark.mp3",
	"womanshortscream": "womanshortscream.mp3",
	"construction": "construction.mp3",
	"doorknock": "doorknock.mp3",
	"exclamation": "exclamation.ogg",
	"ds1moan1": "ds1moan1.m4a",
	"ds1moan2": "ds1moan2.m4a",
	"ds1womancry": "ds1womancry.ogg",
	"youdied": "youdied.ogg",
	"flatline": "flatline.m4a",
	"laughcrowd": "laughcrowd.m4a",
	"bonecrack": "bonecrack.m4a",
	"vineboom": "vine-boom.ogg",
	"cr7": "cr7.m4a",
	"messi": "messi.mp3",
	"compcharew": "compcharew.ogg",
	"compintro": "compintro.ogg",
	"compmoan": "compmoan.ogg",
	"windows10error": "windows10error.ogg",
	"hack": "hack.ogg",
	"alarm": "alarm.ogg",
});

// Define the videos used in the game.
monogatari.assets ('videos', {
	"canumikasa": "canumikasa.mp4",

});

// Define the images used in the game.
monogatari.assets ('images', {
	"titlescreen": "titlescreen.gif",
});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	"bedroommessy": "messybedroom.png",
	"Subway": "subwayinstore.jpg",
	"Park": "park.jpg",
	"FIFA": "fifa.png",
	"house": "house.jpg",
	"subwayeater": "subwayeater2.png",
	"lothric": "lothric.jpg",
	"dist2twitch": "dist2twitch.png",
	"ERZip1": "ERzip1.png",
	"ERZip2": "ERzip2.png",
	"elatwitch": "elatwitch.png",
	"pizzabg": "pizzabg.png",
	"hobtwitch": "hobtwitch.png",
});


// Define the Characters
monogatari.characters({
	'y': {
		name: 'Nemz38',
		color: 'yellow'
	},
	'e': {
		Name: 'Subway Employee',
		Color: '#ffff9f',
		Images: {
			Normal: 'sub_emp_hap.png',
			Mad: 'sub_emp_mad.png'
		}
	},
	'undank': {
		Name: 'Undankk',
		Color: '#C8A2C8',
	},
	'oldman': {
		name: 'Old Man',
		color: '#5bcaff',
		Images: {
			Normal: 'oldman.png'
		}
	},
	'bluey': {
		name: 'Bluey',
		color: '#5bcaff',
		Images: {
			Normal: 'bluey.png'
		}
	},
	'dog': {
		name: 'Dog',
		color: '#C4A484',
		Images: {
			Normal: 'dog.png'
		}
	},
	'foosballchan': {
		name: 'Foosball-Chan',
		color: '#5dba87',
		Images: {
			Normal: 'foosballchan_happy.png',
			Mad: 'foosballchan_shock.png'
		}
	},
	'gravychan': {
		name: 'Gravy-Chan',
		color: '#b58b1d',
		Images: {
			Normal: 'kfcchan.png'
		}
	},
	'scissorschan': {
		name: 'Scissors-Chan',
		color: '#FFC0CB',
		Images: {
			Normal: 'scissorschan.png'
		}
	},
	'batchan': {
		name: 'Bat-Chan',
		color: '#FF0000',
		Images: {
			Normal: 'rouge.png'
		}
	},
	'skittleschan': {
		name: 'Skittles-Chan',
		color: '#ff0000',
		Images: {
			Normal: 'skittleschan.png'
		}
	},
	'walker': {
		name: 'Dog Walker',
		color: '#5bcaff',
		Images: {
			Normal: 'womandog_hap.png',
			Mad: 'womandog_mad.png'
		}
	},
	'ela': {
		name: 'Elajjaz',
		color: '#5bcaff',
		Images: {
			Normal: 'ela_normal.png',
			Pizza: 'ela_pizza.png',
			Mad: 'ela_kratos.png'
		}
	},
	'hob': {
		name: 'The_Happy_Hob',
		color: 'orange',
		Images: {
			Normal: 'hob_happy.png',
			Sword: 'hob_sword.png',
			Bald: 'hob_bald.png',
		}
	},
	'dist': {
		name: 'Distortion2',
		color: '#943F55',
		Images: {
			Normal: 'dist2.png',
			Mad: 'dist2mad.png',
			BF: 'distbf.png'
		}
	},
	'legion': {
		name: 'Legion',
		color: '#5dba87',
	},
	'bing': {
		name: 'bing',
		color: '#5bcaff',
		Images: {
			Normal: 'bing.png'
		}
	},
	'pepe': {
		name: 'OneGuy',
		color: '#588D3D',
		Images: {
			Normal: 'pepelaugh.png'
		}
	},
	'squilla': {
		name: 'Squillakilla',
		color: '#B454F8',
		Images: {
			Normal: 'squilla.png',
			Normal2: 'squilla2.png',
		}
	},
	'hellofresh': {
		name: 'Hello Fresh',
		color: '#5bcaff',
		Images: {
			Normal: 'hellofresh.png'
		}
	},
	'nordvpn': {
		name: 'Nord VPN',
		color: '#5bcaff',
		Images: {
			Normal: 'nordvpn.png'
		}
	},
	'timberborn': {
		name: 'Timberborn',
		color: '#b58b1d',
		Images: {
			Normal: 'timberborn.png'
		}
	},
	'displate': {
		name: 'Displate',
		color: '#5bcaff',
		Images: {
			Normal: 'displate.png'
		}
	},
	'herowars': {
		name: 'Hero Wars',
		color: '#5bcaff',
		Images: {
			Normal: 'herowars.png'
		}
	},


});
monogatari.storage ({
		    playedSubway: true,
		    playedWalk: true,
		    playedDate: true,
		    playedVocal: true,
		    playedController: true,
		    playedTidy: true,
		    playedDist: true,
		    playedEla: true,
		    playedHob: true,
		});

monogatari.script ({
	// The game starts here.
	'Start': [
		'stop music',
		'jump ButtonStart',
		{'Choice': {
	            'Dialog': 'undank Thanks for playtesting! Please suggest script/joke improvements, if anything is *too* cringe, where audio is too quiet/ear rape etc',
	            'Start': {
	                'Text': 'Start',
	                'Do': 'jump TrueStart',
	            },
	            'Debug': {
	                'Text': 'Debug',
	                'Do': 'jump DebugStart',
	            },
		    }
		},
	],
});
