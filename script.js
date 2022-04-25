const pets = [
	{
		name: 'Jennifer',
		img: './assets/pets-jennifer.png',
		breed: 'Dog - Labrador',
		description: 'Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won\'t hesitate to play up a storm in the house if she has all of her favorite toys.',
		age: '2 months',
		inoculations: ['none'],
		diseases: ['none'],
		parasites: ['none'],
		number: 1,
	},
	{
		name: 'Sophia',
		img: './assets/sophia.jpg',
		breed: 'Dog - Shih tzu',
		description: 'Sophia here and I\'m looking for my forever home to live out the best years of my life. I am full of energy. Everyday I\'m learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.',
		age: '2 months',
		inoculations: ['none'],
		diseases: ['none'],
		parasites: ['none'],
		number: 2,
	},
	{
		name: 'Woody',
		img: './assets/pets-woody.png',
		type: 'Dog - Golden Retriever',
		breed: 'Golden Retriever',
		description: 'Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.',
		age: '2 months',
		inoculations: ['none'],
		diseases: ['none'],
		parasites: ['none'],
		number: 3,
	},
	{
		name: 'Scarlett',
		img: './assets/pets-scarlet.png',
		breed: 'Dog - Jack Russell Terrier',
		description: 'Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.',
		age: '2 months',
		inoculations: ['none'],
		diseases: ['none'],
		parasites: ['none'],
		number: 4,
	},

	{
		name: 'Katrine',
		img: './assets/pets-katrine.png',
		breed: 'Cat - British Shorthair',
		description: 'Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.',
		age: '2 months',
		inoculations: ['none'],
		diseases: ['none'],
		parasites: ['none'],
		number: 5,
	},

	{
		name: 'Timmy',
		img: './assets/pets-timmy.png',
		breed: 'Cat - British Shorthair',
		description: 'Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.',
		age: '2 months',
		inoculations: ['none'],
		diseases: ['none'],
		parasites: ['none'],
		number: 6,
	},

	{
		name: 'Freddie',
		img: './assets/pets-katrine (1).png',
		breed: 'Cat - British Shorthair',
		description: 'Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.',
		age: '2 months',
		inoculations: ['none'],
		diseases: ['none'],
		parasites: ['none'],
		number: 7,
	},

	{
		name: 'Charly',
		img: './assets/pets-charly.jpg',
		breed: 'Dog - Jack Russell Terrier',
		description: 'This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.',
		age: '2 months',
		inoculations: ['none'],
		diseases: ['none'],
		parasites: ['none'],
		number: 8,
	},

];

numb = 10;

function getCurrentScreen() {
	const width = window.innerWidth || document.innerWidth;
	switch (true) {
		case width < screens.tablet:
			return screens.mobile;
		case width < screens.desktop && width > screens.tablet:
			return screens.tablet;
		case width >= screens.desktop:
			return screens.desktop;
		default:
			return screens.desktop;
	}
}


const screens = {
	mobile: 320,
	tablet: 768,
	desktop: 1280,
}
const offsets = {
	[screens.mobile]: 1,
	[screens.tablet]: 2,
	[screens.desktop]: 3,
}

function getCurrentScreen() {
	const width = window.innerWidth || document.innerWidth;
	switch (true) {

		case width < screens.tablet:
			return screens.mobile;

		case width < screens.desktop && width > screens.tablet:
			return screens.tablet;

		case width >= screens.desktop:
			return screens.desktop;

		default:
			return screens.desktop;
	}
}

let currentOffset = offsets[getCurrentScreen()];

console.log(currentOffset);

// const allPets = [];
// for (let i = 0; i < 8; i++) {
// 	const newArr = [...pets];
// 	allPets.push(...newArr.sort(() => Math.random() - 0.5));
// }
// console.log(allPets);



const menu = document.querySelector('.header__menu');
const burger = document.querySelector('.header__burger');
const logoBox = document.querySelector('.header__logo-box');


const back = document.querySelector('.header__menu-backdrop');


const appCard = document.querySelector('.friends__appCard');
const friendsColumns = document.querySelector('.friends__columns');
const appflexCard = document.querySelector('.friends__appflex-card');
const backDrop = document.querySelector('.friends__backdrop');



// friendsColumns.addEventListener('click', function(event) {
	
// 	const card = event.target.closest('.friends__column');

// 	if (card) {
// 		appCard.classList.toggle('friends__block');
// 		document.body.classList.toggle('overflow');
// 	}

// }, true);

backDrop.addEventListener('click',function(event) {

	if(!event.target.closest('.friends__appflex-card')) {
		appCard.classList.toggle('friends__block');
		document.body.classList.toggle('overflow');
		appflexCard.innerHTML = '';
		
	}
	
})


menu.addEventListener('click', (event) => {
	if (event.target.classList.contains('header__menu-link')) {
		toggleMenu();
	}
})
burger.addEventListener('click', toggleMenu);
back.addEventListener('click', toggleMenu);




function toggleMenu() {
	burger.classList.toggle('header__rotate1');
	menu.classList.toggle("header__menu-trans");
	logoBox.classList.toggle("header__visibility");
	back.classList.toggle("header__menu-backdrop_open");
	burger.classList.toggle("header__sign");
}

let resArr = [];
// function s1() {
// 	array = []
// 	array2 = []
// 	array3 = []
// 	arrayB = []
// 	arrayC = []

// 	for (let a = 0; array.length < 8;a++) {
		
// 		let z =  Math.floor(Math.abs(Math.random() - 0.00001) / 0.125)  + 1;

// 		if (!array.includes(z))  {
// 			array.push(z)
// 		}
// 	}

// 	console.log('')

// 	array2.push(array[6])
// 	array2.push(array[7])

// 	for ( let b = 0 ; array2.length < 6;b++) {
// 		let z =  Math.floor(Math.abs(Math.random() - 0.00001) / 0.125)  + 1;

// 		if(!array2.includes(z)) {

// 			array2.push(z)
// 			array.push(z)
// 			arrayB.push(z)
// 		}
		

// 	}

// 	for(let c = 0; arrayB.length < 8; c++) {

// 		let z =  Math.floor(Math.abs(Math.random() - 0.00001) / 0.125)  + 1;

// 		if(!arrayB.includes(z)) {

// 			array.push(z)
// 			arrayB.push(z)
// 			array3.push(z)
// 		}


// 	}

// 	for(let c = 0; array3.length < 6; c++) {
// 		let z =  Math.floor(Math.abs(Math.random() - 0.00001) / 0.125)  + 1;

// 		if(!array3.includes(z)) {

// 			array.push(z)
// 			arrayC.push(z)
// 			array3.push(z)
// 		}

// 	}

// 	for(let c = 0; arrayC.length < 8; c++) {
// 		let z =  Math.floor(Math.abs(Math.random() - 0.00001) / 0.125)  + 1;

// 		if(!arrayC.includes(z)) {

// 			array.push(z)
// 			arrayC.push(z)
// 		}

// 	}

// 	console.log(array.slice(0,8))
// 	console.log(array.slice(8,16))
// 	console.log(array.slice(16,24))
// 	console.log('')

// 	console.log(array.slice(0,6))
// 	console.log(array.slice(6,12))
// 	console.log(array.slice(12,18))
// 	console.log(array.slice(18,24))
// 	console.log('')

// 	resArr = resArr.concat(array)
// }
// s1()
// s1()


PrevArray = []
array = []

function createCards() {
	let array = []
	switch(currentOffset) {

		case 1:

			for(let q = 0; array.length < 1; ) {
				let w =  Math.floor(Math.abs(Math.random() - 0.00001) / 0.125)  + 1;

				if (!PrevArray.includes(w) && !array.includes(w))  {
					console.log(PrevArray.includes(w))
					q++
					array.push(w)
				}
			}
			PrevArray = array.slice(0);
		 
			return `
				<div class="friends__columns ">


					<div data-index="${pets[array[0] - 1].number}" class="friends__column friends__column1">
						<div class="friends__container">
							<div class="friends__img"><img src="${pets[array[0] - 1].img}"  height = "270" width = "270"
							alt="${pets[array[0] - 1].name}"></div>
							<div class="friends__text text_20 georgia" >${pets[array[0] - 1].name}</div>
							<div class="friends__buttons buttonWhite">Learn more</div>
						</div>
					</div>

					<div data-index class="friends__column friends__column2">
						<div class="friends__container">
							<div class="friends__img"><img src="./assets/pets-jennifer.svg"  height = "270" width = "270"alt="dog"></div>
							<div class="friends__text text_20 georgia" >Jennifer</div>
							<div class="friends__buttons buttonWhite">Learn more</div>
						</div>
					</div>
			
					<div data-index class="friends__column friends__column3">
						<div class="friends__container">
							<div class="friends__img"><img src="./assets/pets-woody (1).svg"  height = "270" width = "270"alt="dog"></div>
							<div class="friends__text text_20 georgia" >Woody</div>
							<div class="friends__buttons buttonWhite">Learn more</div>
						</div>
					</div>
					
			 	</div>
			`;
			break;

		case 2:

			for(let q = 0; array.length < 2;) {
				let w =  Math.floor(Math.abs(Math.random() - 0.00001) / 0.125)  + 1;

				if (!PrevArray.includes(w) && !array.includes(w))  {
					console.log(PrevArray.includes(w))
					array.push(w)
					q++
				}
				
			}
			PrevArray = array.slice(0);


			return 	`
		<div class="friends__columns ">


			<div data-index="${pets[array[0] - 1].number}" class="friends__column friends__column1">
				<div class="friends__container">
					<div class="friends__img"><img src="${pets[array[0] - 1].img}"  height = "270" width = "270"
					alt="${pets[array[0] -1].name}"></div>
					<div class="friends__text text_20 georgia" >${pets[array[0] - 1].name}</div>
					<div class="friends__buttons buttonWhite">Learn more</div>
				</div>
			</div>
			
			<div data-index="${pets[array[1] - 1].number}" class="friends__column friends__column2">
				<div class="friends__container">
					<div class="friends__img"><img src="${pets[array[1] - 1].img}"  height = "270" width = "270"
					alt="${pets[array[1] -1].name}"></div>
					<div class="friends__text text_20 georgia" >${pets[array[1] - 1].name}</div>
					<div class="friends__buttons buttonWhite">Learn more</div>
				</div>
			</div>
			
			<div data-index class="friends__column friends__column3">
				<div class="friends__container">
					<div class="friends__img"><img src="./assets/pets-woody (1).svg"  height = "270" width = "270"alt="dog"></div>
					<div class="friends__text text_20 georgia" >Woody</div>
					<div class="friends__buttons buttonWhite">Learn more</div>
				</div>
			</div>
		
		</div>
		`;
		break;
			
		case 3:

			for(let q = 0; array.length < 3; ) {
				let w =  Math.floor(Math.abs(Math.random() - 0.00001) / 0.125)  + 1;

				if (!PrevArray.includes(w) && !array.includes(w))  {
					console.log(PrevArray.includes(w))
					array.push(w)
					q++
				}
			}
			PrevArray = array.slice(0);
		
		return `
		<div class="friends__columns">


			<div data-index="${pets[array[0] - 1].number}" class="friends__column friends__column1">
				<div class="friends__container">
					<div class="friends__img"><img src="${pets[array[0] - 1].img}"  height = "270" width = "270"
					alt="${pets[array[0] -1].name}"></div>
					<div class="friends__text text_20 georgia" >${pets[array[0] - 1].name}</div>
					<div class="friends__buttons buttonWhite">Learn more</div>
				</div>
			</div>
			
			<div data-index="${pets[array[1] - 1].number}" class="friends__column friends__column2">
				<div class="friends__container">
					<div class="friends__img"><img src="${pets[array[1] - 1].img}"  height = "270" width = "270"
					alt="${pets[array[1] -1].name}"></div>
					<div class="friends__text text_20 georgia" >${pets[array[1] - 1].name}</div>
					<div class="friends__buttons buttonWhite">Learn more</div>
				</div>
			</div>
			
			<div data-index="${pets[array[2] - 1].number}" class="friends__column friends__column3">
				<div class="friends__container">
					<div class="friends__img"><img src="${pets[array[2] - 1].img}"  height = "270" width = "270"
					alt="${pets[array[2] -1].name}"></div>
					<div class="friends__text text_20 georgia" >${pets[array[2] - 1].name}</div>
					<div class="friends__buttons buttonWhite">Learn more</div>
				</div>
			</div>
		
		</div>
		`;
		break;


		default:break;
	}

	
	for (let a = 0; array.length < 8;a++) {
		
		let z =  Math.floor(Math.abs(Math.random() - 0.00001) / 0.125)  + 1;

		if (!array.includes(z))  {
			array.push(z)
		}
	}

}

console.log(resArr)



caruselNext = document.querySelector('.friends__btn-next');
caruselPrev = document.querySelector('.friends__btn-prev');
caruselParent = document.querySelector('.friends__parent-columns')

caruselParent.insertAdjacentHTML('beforeend', createCards());



wrapper = document.querySelector('.friends__wrapper')
console.log(wrapper)

wrapper.addEventListener('click',(event) => {
	console.log(event.target.closest('.friends__column'))



	const card = event.target.closest('.friends__column');
		if (card) {
			
			appCard.classList.toggle('friends__block');
			document.body.classList.toggle('overflow');
			appflexCard.insertAdjacentHTML('beforeend', paginationMain(pets[event.target.closest('.friends__column').getAttribute("data-index") - 1]));
		}


	switch(event.target) {
		
		case event.target.closest('.friends__btn-next'):
		if (numb != 2) {
			caruselParent.insertAdjacentHTML('beforeend', createCards());
			numb == 1;
		} 

		
		

	let f = document.getElementsByClassName('friends__columns');
	caruselNext.setAttribute('disabled', 'disabled');

	setTimeout(() => {

		for(let i = 0 ; i < f.length; i++) {
			console.log()
			f[i].classList.add('friends__transition');
		}

		for(let i = 0 ; i < f.length; i++) {
			f[i].classList.add('friends__translateRight');
		}

	},0);

	setTimeout(()=> {
		document.querySelector('.friends__columns').remove()

		for(let i = 0 ; i < f.length; i++) {
			f[i].classList.remove('friends__transition');
		}


		for(let i = 0 ; i < f.length; i++) {
			f[i].classList.remove('friends__translateRight');
		}
		
		caruselNext.removeAttribute('disabled');
	}, 500);

		break;

		case event.target.closest('.friends__btn-prev'):

		if(numb != 1) {
			caruselParent.insertAdjacentHTML('afterbegin', createCards());
			
			numb == 2;
		}

		let l  = document.querySelector('.friends__columns')
		let p = document.getElementsByClassName('friends__columns');
		caruselPrev.setAttribute('disabled', 'disabled');
	
		setTimeout(() => {
			
			for(let i = 0 ; i < p.length; i++) {
				p[i].classList.add('friends__translateRight');
			}
	
		},0);
	
	
		setTimeout(() => {
			for(let i = 0 ; i < p.length; i++) {
				p[i].classList.add('friends__transition');
			}
		},32)
		
	
		setTimeout(() => {
			
			for(let i = 0 ; i < p.length; i++) {
				p[i].classList.remove('friends__translateRight');
			}
	
		},48)
	
		setTimeout(()=> {
		
			for(let i = 0 ; i < p.length; i++) {
				p[i].classList.remove('friends__transition');
			}
	
			l.remove();
			caruselPrev.removeAttribute('disabled');
		}, 508)

	break;


		// case event.target.closest('.friends__column'): 
		// console.log(1)
		// appCard.classList.toggle('friends__block');
		// document.body.classList.toggle('overflow');
		// break;
		
		default:break;
	}

	


})
	
// let card = event.target.closest('.friends__column');

// if (card) {
// 	appCard.classList.toggle('friends__block');
// 	document.body.classList.toggle('overflow');
// }
// break;





menu.addEventListener('click', (event) => {
	if (event.target.classList.contains('header__menu-link')) {
		toggleMenu();
	}
})

// caruselNext.addEventListener('click', function() {

	

// })


// caruselPrev.addEventListener('click', function() {
	
// })



function createCaruselTemplate(pet) {
	return `
	<div class="friends__columns ">


	<div data-index class="friends__column friends__column1">
		<div class="friends__container">
			<div class="friends__img"><img src="./assets/pets-katrine.svg"  height = "270" width = "270"alt="cat"></div>
			<div class="friends__text text_20 georgia" >Katrine</div>
			<div class="friends__buttons buttonWhite">Learn more</div>
		</div>
	</div>

	<div data-index class="friends__column friends__column2">
		<div class="friends__container">
			<div class="friends__img"><img src="./assets/pets-jennifer.svg"  height = "270" width = "270"alt="dog"></div>
			<div class="friends__text text_20 georgia" >Jennifer</div>
			<div class="friends__buttons buttonWhite">Learn more</div>
		</div>
	</div>

	<div data-index class="friends__column friends__column3">
			<div class="friends__container">
				<div class="friends__img"><img src="./assets/pets-woody (1).svg"  height = "270" width = "270"alt="dog"></div>
				<div class="friends__text text_20 georgia" >Woody</div>
				<div class="friends__buttons buttonWhite">Learn more</div>
			</div>
	</div>

</div>
	`;
}





function paginationMain(pet) {
	return `
	<div class="friends__app-img">
		<img class = "friends__image" src="${pet.img}" alt="jen">
	</div>

	<div class="friends__app-descr">
		<h3 class="friends__app-title text_35 georgia">${pet.name}</h3>
		<h5 class="friends__app-breed georgia text_20">${pet.breed}</h5>
		<div class="friends__app-text georgia text_15">${pet.description}</div>
	

		<ul class="friends__app-ul">
			<li class = "friends__li text_15 georgia"><span><b>Age : </b>${pet.age}</span></li>
			<li class = "friends__li text_15 georgia"><span><b>Inoculations : </b>${pet.inoculations}</span></li>
			<li class = "friends__li text_15 georgia"><span><b>Diseases : </b>${pet.diseases}</span></li>
			<li class = "friends__li text_15 georgia"><span><b>Parasites : </b>${pet.parasites}</span></li>
		</ul>

	</div>
	`;
}