const navItems = document.createElement('ul');
document.querySelector('.content').appendChild(navItems);
navItems.className = 'navigationbar';

const restaurantName = document.createElement('div');
restaurantName.innerHTML = '<h2>CARY AND CURRY<i class="fa fa-cutlery" aria-hidden="true"></i></h2>';
restaurantName.className = 'restaurantname';
navItems.appendChild(restaurantName);

const home = document.createElement('li');
home.className = 'navlist';
home.classList.add('active');
const homelink = document.createElement('a');
homelink.href = '#home-pane';
homelink.innerHTML = "Home";
home.appendChild(homelink);
navItems.appendChild(home);

const aboutUs = document.createElement('li');
aboutUs.className = 'navlist';
const aboutlink = document.createElement('a');
aboutlink.href = '#about-pane';
aboutlink.innerHTML = "About Us";
aboutUs.appendChild(aboutlink);
navItems.appendChild(aboutUs);

const mains = document.createElement('li');
mains.className = 'navlist';
navItems.appendChild(mains);
const mainslink = document.createElement('a');
mainslink.href = '#mains-pane';
mainslink.innerHTML = "Our Mains";
mains.appendChild(mainslink);

const desserts = document.createElement('li');
desserts.className = 'navlist';
navItems.appendChild(desserts)
const dessertslink = document.createElement('a');
dessertslink.href = '#desserts-pane';
dessertslink.innerHTML = "Our Desserts";
desserts.appendChild(dessertslink);

const contacts = document.createElement('li');
contacts.className = 'navlist';
navItems.appendChild(contacts)
const contactslink = document.createElement('a');
contactslink.href = '#contacts-pane';
contactslink.innerHTML = "Contact Us";
contacts.appendChild(contactslink);

//home modal
const homeModal = document.querySelector('#home-pane');
homeModal.classList.add('active');

//About modal
const aboutModal = document.createElement('div');
aboutModal.className = 'tab-pane';
aboutModal.id = 'about-pane';
document.querySelector('.content').appendChild(aboutModal);

const ourProducts = document.createElement('div');
ourProducts.className = 'ourProducts';
ourProducts.innerHTML = '<h5>Welcome To CARY AND CURRY <br>Where Fresh Meets Spicy</h5>';
aboutModal.appendChild(ourProducts);

//about pages wrapper
const aboutPages = document.createElement('div');
aboutPages.className = 'aboutpages';
aboutModal.appendChild(aboutPages);

const aboutTitle = document.createElement('div');
aboutTitle.className = 'abouttitle';
aboutTitle.innerHTML = '<h2>CARY AND CURRY<i class="fa fa-cutlery" aria-hidden="true"></i></h2>';
aboutPages.appendChild(aboutTitle);

//mission and vision wrapper
const missionAndVisionWrapper = document.createElement('div');
missionAndVisionWrapper.className = 'missionAndVisionWrapper';
aboutPages.appendChild(missionAndVisionWrapper);

const ourMission = document.createElement('div');
ourMission.className = 'ourmission';
ourMission.innerHTML = '<h5>OUR MISSION<br> <span>We Strive to satisfy our Customers by meeting all their needs when it comes to flavor. We make food memorable and addictive. Like Cary says, if it doesn\'t kick, don\'t click!" Enjoy the Punch.</span></h5>';
missionAndVisionWrapper.appendChild(ourMission);

const ourVision = document.createElement('div');
ourVision.className = 'ourvision';
ourVision.innerHTML = '<h5>OUR VISION<br> <span>To make all the flavors of the world available at a click!</span></h5>';
missionAndVisionWrapper.appendChild(ourVision);

const ourHistory = document.createElement('div');
ourHistory.className = 'ourhistory';
ourHistory.innerHTML = '<h5>OUR HISTORY<br> <span>Cary and Curry is a legacy. A generation of spicy women making spicy, flavorful food. Our CEO and founder, Cary Mimz, is the fourth generation Cary. Her love of food and adventure is what gave birth to this delicious venture. Her vision of sharing the flavors of the world with the world has inspired passionate cooking and created employment for over 2000 people allover the world. Be part of the Legacy.</span></h5>';
missionAndVisionWrapper.appendChild(ourHistory);

//Mains modal
const mainsModal = document.createElement('div');
mainsModal.className = 'tab-pane';
mainsModal.id = 'mains-pane';
document.querySelector('.content').appendChild(mainsModal);

const mainDishOne = document.createElement('div');
mainDishOne.className = 'maindishone';
const mainDishOneDescription = document.createElement('h5');
mainDishOneDescription.textContent = 'Shrimp and Octopus Skewers with roasted potatoes, buttery corn, and a side of jalapeno and sun dried tomato dipping sauce';
mainDishOne.appendChild(mainDishOneDescription);
mainsModal.appendChild(mainDishOne);

const mainDishTwo = document.createElement('div');
mainDishTwo.className = 'maindishtwo';
const mainDishTwoDescription = document.createElement('h5');
mainDishTwoDescription.textContent = 'Spicy Roasted Chicken Legs Coated in a Veggie Stir Fry and garnished with a lemon slice and smoked green pepper.';
mainDishTwo.appendChild(mainDishTwoDescription);
mainsModal.appendChild(mainDishTwo);

const mainDishThree = document.createElement('div');
mainDishThree.className = 'maindishthree';
const mainDishThreeDescription = document.createElement('h5');
mainDishThreeDescription.textContent = 'Hawaiian Pizza. Shredded Chicken, Pinneapple chunks, Onions, Ham, Tomato sauce, Barbeque sauce, and cheese.';
mainDishThree.appendChild(mainDishThreeDescription);
mainsModal.appendChild(mainDishThree);

const mainDishFour = document.createElement('div');
mainDishFour.className = 'maindishfour';
const mainDishFourDescription = document.createElement('h5');
mainDishFourDescription.textContent = 'Fresh Oysters braised in coconut cream with mushrooms, carrots, celery and onions.';
mainDishFour.appendChild(mainDishFourDescription);
mainsModal.appendChild(mainDishFour);

const mainDishFive = document.createElement('div');
mainDishFive.className = 'maindishfive';
const mainDishFiveDescription = document.createElement('h5');
mainDishFiveDescription.textContent = 'Sweet and spicy Honey Barbeque chicken thighs on a bed of pasta and veggie stir fry.';
mainDishFive.appendChild(mainDishFiveDescription);
mainsModal.appendChild(mainDishFive);

//Desserts modal
const dessertsModal = document.createElement('div');
dessertsModal.className = 'tab-pane';
dessertsModal.id = 'desserts-pane';
document.querySelector('.content').appendChild(dessertsModal);

const dessertOne = document.createElement('div');
dessertOne.className = 'dessertone';
const dessertOneDescription = document.createElement('h5');
dessertOneDescription.textContent = 'Chocolate mousse cake with a warm chocolate caramel sauce and fresh strawberries and mint to garnish.';
dessertOne.appendChild(dessertOneDescription);
dessertsModal.appendChild(dessertOne);

const dessertTwo = document.createElement('div');
dessertTwo.className = 'desserttwo';
const dessertTwoDescription = document.createElement('h5');
dessertTwoDescription.textContent = 'Vanilla and hazelnut cupcake with chocolate filling topped with hazelnut ice cream, chocolate, and strawberries .';
dessertTwo.appendChild(dessertTwoDescription);
dessertsModal.appendChild(dessertTwo);

const dessertThree = document.createElement('div');
dessertThree.className = 'dessertthree';
const dessertThreeDescription = document.createElement('h5');
dessertThreeDescription.textContent = 'Cranberry pie with a hint of nutmeg.';
dessertThree.appendChild(dessertThreeDescription);
dessertsModal.appendChild(dessertThree);

const dessertFour = document.createElement('div');
dessertFour.className = 'dessertfour';
const dessertFourDescription = document.createElement('h5');
dessertFourDescription.textContent = 'Cardamon flavored waffle with chocolate sauce and mixed berries topping.';
dessertFour.appendChild(dessertFourDescription);
dessertsModal.appendChild(dessertFour);

const dessertFive = document.createElement('div');
dessertFive.className = 'dessertfive';
const dessertFiveDescription = document.createElement('h5');
dessertFiveDescription.textContent = 'Dark chocolate Brownie with vanilla ice cream topping and chocolate and caramel sauce.';
dessertFive.appendChild(dessertFiveDescription);
dessertsModal.appendChild(dessertFive);

//Contacts modal
const contactsModal = document.createElement('div');
contactsModal.className = 'tab-pane';
contactsModal.id = 'contacts-pane';
document.querySelector('.content').appendChild(contactsModal);

const socialMedia = document.createElement('ul');
contactsModal.appendChild(socialMedia);

const faceBook = document.createElement('li');
faceBook.innerHTML = '<h2><i class="fa fa-facebook-square" aria-hidden="true"></i>  Cary & Curry</h2>'
contactsModal.appendChild(faceBook);

const twitter = document.createElement('li');
twitter.innerHTML = '<h2><i class="fa fa-twitter-square" aria-hidden="true"></i>  Cary_Curry</h2>'
contactsModal.appendChild(twitter);

const instagram = document.createElement('li');
instagram.innerHTML = '<h2><i class="fa fa-instagram" aria-hidden="true"></i>  @CaryCurry</h2>'
contactsModal.appendChild(instagram);

const youTube = document.createElement('li');
youTube.innerHTML = '<h2><i class="fa fa-youtube-play" aria-hidden="true"></i>  Cary\'s Kitchen</h2>'
contactsModal.appendChild(youTube);

const delivery = document.createElement('li');
delivery.innerHTML = '<h2>Call Us 2300-3456-7656</h2>'
contactsModal.appendChild(delivery);


function onTabClick(event) {
    let activeTabs = document.querySelectorAll('.active');
    
    // deactivate existing active tab and panel
    // for( let i = 0; i < activeTabs.length; i++) {
    //   activeTabs[i].className = activeTabs[i].className.replace('active', '');
    // }
    
    activeTabs.forEach(function(tab) {
      tab.className = tab.className.replace('active', ''); //tab.classList.remove('active');
      tab.style.backgroundColor = 'initial';
    });
    
    // activate new tab and panel
    event.target.parentElement.className += ' active';
    event.target.parentElement.style.backgroundColor = 'orange';
    document.getElementById(event.target.href.split('#')[1]).className += ' active'; //.classList.add(.active);
  }
  
navItems.addEventListener('click', onTabClick, false);



