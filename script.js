//JS Pratice for Unit 1


//=================================================//

//Note Example

//let wallet = new Object();
//Object Constructor

//let wallet = {
    //card: "Debit",
    //cash: 42
//};
//Object Literal

//================================================//

//Active Engagement

//let student = {
    //name: "Fernando Rodriguez",
    //id: "ButterMan",
    //hairColor: "Black",
    //favoriteSnake: "Ruffles",
    //class: "Coding",
    //session: "4:00"
//};

//console.log(student);//This calls the object

//================================================//

//Calls a specifice property

//console.log(wallet.cash);

//==============================================//

//Adds a New Property

//wallet.ID = "School ID";
//console.log(wallet.ID);

//==============================================//

//Removes Property

//delete wallet.cash;

//================================================//

//MultiWord Properties

//Breaks
//wallet.is poor = true;

//Breaks
//wallet."is poor" = true;

//MultiWord Properties we use square brackets
//wallet["is poor"] = true;
//console.log(wallet["is poor"]);

//================================================//

//Adding Through Prompts

//let wallet = {};
//let money = prompt("How much do you want to take out", "20");
//wallet.["cash"] = money;

//==============================================//

//Propt the user for name, fav color, and random number

//let user = {};

//let noombre = prompt("What is your name?");
//user["name"] = noombre;
//let color = prompt("What is your favorite color?");
//user["favColor"] = color;
//let number = prompt("Put a random number");
//user["rngNumber"] = number;

//console.log(user);

//================================================//

//Function to Initilize/Clone

//function createStudent(name, id) {
    //return {
        //name: name,
        //id: id
    //};
//}

//let fernando = createStudent("Ferando R.", 27689);

//console.log(fernando.name); //Fernando R.

//================================================//

//The "In" Operator

//"key" in object //true or false

//"cash" in wallet // false, if there is no cash in the wallet

//===============================================//

//"For in Loop"

//for(let key in wallet) {
    //console.log(key); //card, cash
    //console.log(wallet[key]);//"debit", 42
//}

//==============================================//

//Ordering Objects

//let list = {
    //5: 4,
    //10: 3
//}

//console.log([list]);

//=============================================//

//An Array Object   (Notes)
//Not the best way to store values

//let myself = ["Fernando", 16, "Black", "Phoenix", "fishing"];

//console.log(myself[2]);

//Best Way to store values if differnt values

//let newSelf = {
    //name: "Fernando",
    //age: 16,
    //hair: "black",
    //homeTown: "Phoenix",
    //hobby: "fishing"
//};

//console.log(newSelf["hobby"]);

//=============================================//

//Object Code Along Pratice

//let polarBear = {
    //furColor: "White",
    //avgWeight: "880 lbs",
    //country: "Artic",
    //lifespane: "15 years",
    //population: "endangered",
    //deit: ["seals", "Whale Carcasses", "garbage", "berries", "seaweed", "whale"]
//};

//==================================================//

//Object Pratice
//Takes the name and gives it a random number for Words per Min

//let name  = 
//`Keeley Lane
//Oliver Hutton
//Zaynah Wiggins
//Ashlea Shah
//Seth Dean
//Liyah Whitley
//Erik Avery
//Hari Lim
//Isla-Grace Watkins
//Tristan Lake
//Sophia-Rose Arellano
//Ayra Searle
//Harlow Wormald
//Haris Brandt
//Anushka Soto
//Nikita Coates
//Maya Harris
//Trevor Baird
//Tyra Travis
//Jax Philip
//Amanah Finch
//Rida King
//Ilayda Mueller
//Margo Fenton
//Kelsie Pike
//Areeb Joseph
//Yuvaan Warren
//Lavinia Burt
//Libbi Contreras
//Hamaad Hodgson
//Walid Swift
//Farhana Vaughan
//Jayson Orr
//Mohsin Salazar
//Kien Tomlinson
//Maysa Dyer
//Meadow Atherton
//Tiarna Pollard
///Lily House
//Roza Sykes
//Jon-Paul Beattie
//Elisabeth Garrett
//Magdalena Fitzpatrick
//Isra Emery
//Esmai Clemons
//Nikki Swan
//Anastasia Holcomb
//Fiona Caldwell
//Abraham Douglas`;

//let namesArray = name.split("/n");
//let typingSpeed = {};

//function createSpeedList(array) {
    //for(let i = 0; i < array.lenght; i++){
        //let key = array[i];
        //let value = Math.ceil(Math.random() * 80 + 20); // Minimum is 20

        //typingSpeed[key] = value;
    //}
//}

//createSpeedList(namesArray);
//console.log(typingSpeed);

//let tvStatic = {};

//function createTvObject(array) {
    //for(let i = 0; i < array.lenght; i++){

    //let key  = array[i];
    //let value = "";

    //let randy = Math.ceil(Math.random()*3);

    //if(randy == 1){
        //value = "off"
    //}else{
        //value = Math.ceil(Math.random()*99);
    //}

    //tvStatic[key] = value;
    //}  
//}

//createTvObject(namesArray);
//console.log(tvStatic);

//======================================================//

//End of Day assignment

//let names = 
//`
//Dollie Liu
//Patrik Sykes
//Kester Hilton
//Glen O'Sullivan
//Claudia Sadler
//Elowen Beech
//Carly Vu
//Monika Rocha
//Sana Rosa
//Madison Hubbard
//Arisha Burch
//Declan Sanford
//Misbah Matthams
//Geraint Reid
//Orla Levine
//Alyssa Bate
//Sannah Edge
//Emile Leach
//Mara Finnegan
//Alexandra Berry
//Niam Marriott
//Myles Noel
//Emanuel Peters
//Anil May
//Yuvraj Laing
//Shiloh Griffith
//Saima Dean
//Olivia Ventura
//Khadija Oneil
//Tamera Whitfield
//Cleo Decker
//Ceri Downs
//Donnell Coombes
//Malachy Mcbride
//Husnain Hutchinson
//Zak Lucero
//Nylah Fuentes
//Chanel Cantu
//Aidan Leblanc
//Sebastian Rush
//Isabel Valdez
//Ty Cox
//Everly Reader
//Alayna Werner
//Suraj Poole
//Kendall Archer
//Subhan Cullen
//Hayley Cummings
//Avery Peterson
//Zack Hardin
//Pablo Dunkley
//Ayesha Neal
//Arlene Clarkson
//Tiarna Schaefer
//Carson Baxter
//Gus Berg
//Charley Whyte
//Elaina Oconnor
//Caiden Simons
//Mitchel Hall
//Zach Deleon
//Inaayah Bridges
//Stephen Schmidt
//Amber Hussain
//Ember Ibarra
//Lleyton Morley
//Ariyan French
//Tala Wall
//Safia Oneill
//Mabel Seymour
//Demi-Leigh Flower
//Cheyenne Wharton
//Rodrigo Sutherland
//Habibah Estrada
//Aisling King
//Evie-Mae Harrell
//Chace Mccormack
//Aizah Morton
//Frances Cortes
//Chardonnay Tierney
//Malaikah Strickland
//Nolan Hardy
//Aliesha Gentry
//Aadam Bowers
//Donell Felix
//Maiya Dixon
//Ameer Bright
//Kylie Monaghan
//Kate Cortez
//Fabian Vo
//Kaelan Villalobos
//Tonya Devlin
//Maria Landry
//Yara Hurley
//Gracie-Leigh Paine
//Naeem Cross
//Arley Singh
//Jolyon Ashton
//Khadeejah Workman
//Ptolemy Snow
//`;
//let namesArray = names.split("/n");
//let salaries = {};

//function createSalaryList(array) {

    //for(let i = 0; i < array.lenght; i++){
        //let randy = Math.floor(Math.random()*(10 - 1 + 1) + 1);
        //let key = array[i];
        //let value = "";
        //if(randy == 1){
            //value = "intern";
        //}else if(randy >= 2 && randy <= 4){
            //value = Math.floor(Math.random()*(20000 - 10000 + 1) + 10000);
        //}else if(randy >= 5 && randy <= 9){
            //value = Math.floor(Math.random()*(30000 - 50000 + 1) + 30000);
        //}else{
            //value = Math.floor(Math.random()*(80000 - 120000 + 1) + 1);
        //}
        //salaries[key] = value;
    //}

    //let randy = Math.floor(Math.random()*(99 - 0 + 1) + 0);
    //let key = array[randy];
    //salaries[key] = 250000;
//}

//createSalaryList(namesArray);
//console.log(salaries);

//----------------------------------------------------//

//let totalMoney = 0;

//for(let key in salaries){
    //if(salaries[key] != "intern" && salaries[key] != 250000){
        //salaries[key] -= 5000;
        //totalMoney +=5000;
    //}
    //if(salaries[key] == 250000){
        //ceo = key;
    //}

//}

//salaries[ceo] += totalMoney;

//console.log(salaries);
//console.log(`${ceo} is the CEO and they make ${saleries[ceo]}`);

//---------------------------------------------------------------//

//let interns = 0;
//let charity = 0;

//for(let key in salaries){
    //if(salaries[key] == "intern"){
        //interns++;
        //continue;
    //}
    //if(salaries[key] != 250000){
        //charity = Math.floor(salaries[key] / 2);
        //salaries[key] = Math.floor(salaries[key] / 2);
    //}
//}

//let internMoney = Math.floor(charity / interns);

//for(let key in salaries){
    //if(salaries[key] == "intern"){
        //salaries[key] = internMoney;
    //}
//}

//salaries[interns] += internMoney;

//console.log(`The Interns make ${internMoney}.`);


//====================================================//

//Method ShortHand

//user = {
    //sayHi: function() {
        //alert("Hello");
    //}
//};

// Or

//user = {
    //sayHi() {
        //alert("Hello");
    //}
//};

//=================================================//

//this.method

//let user1 = {
    //name: "Fernando",

    //sayHi: function() {
        //console.log(`hello ${this.name}`);
    //}
//}


//let user2 = {
    //name: "Hanz",

    //sayHi: function() {
        //console.log(`hello ${this.name}`);
    //}
//}

//let newUser = {}
//Object.assign(newUser, user1);
//newUser.name = "Johnny"

//user1.sayHi();
//user2.sayHi();
//newUser.sayHi();

//=======================================================//

//Active Engagement

//let calculator = {
    //read() {
        //this.a = Number(prompt('What is the first number?', 0));
        //this.b = Number(prompt('What is the second number?', 0));
    //},
    //sum() {
        //console.log("The sume is " + (this.a + this.b));
    //},
    //multiply() {
        //console.log("The product is " + (this.a * this.b));
    //}
//}

//calculator.read();
//calculator.sum();
//calculator.multiply();

//=======================================//

//Active Engaement

//let ladder = {
    //step: 0,
    //up() {
        //if(this.step < max || max == undefined){
            //this.step++
            //return this;
        //}else{
            //return this;
        //}
    //},
    //down() {
        //if(this.step > 0) {
            //this.step--
            //return this;
        //}else{
            //return this;
        //}
    //},
    //height(max) {
        //this.max = max;
        //return this;
    //},
    //showStep() {
        //console.log("You are on step " + this.step );
        //return this;
    //}
//}

//When Chainig objects add return so it can run properly
//ladder.height(3);
//ladder.up().down().up().up().showStep();

//Should show step 0

//=====================================//

//Active Engagement 1/14/21

//function Student (name, id, gardeLev, curGarde) {
    //this.name = name;
    //this.id = id;
    //this.gardeLev = gardeLev;
    //this.curGarde = curGarde;
    //this.permission = "Student";

    //this.graduate = function() {
        //if(gardeLev < 12){
            //this.gardeLev++;
        //}
    //}

    //this.whhitlist = function() {
        //this.permission = "Admin";
    //}

    //this.setGrade = function() {
        //this.curGarde = value;
    //}
//};

//let fernando = new Student("fernando", 1234, 12, "A");
//fernando.permission = "Admin";
//console.log(fernando);

//============================================//

//Proper Class Syntax

//class MyClass {
    //constructor() {
        //defult Values
    //}
    //method1(){}
//}

//=========================================//

//Full class

//class Student {
    //constructor(name, id, gradeLevel){
        //this.name = name;
        //this.id = id;
        //this.gradeLevel = gradeLevel;
        //this.perm = "Student";
    //}
    //checkPerm() {
        //console.log(`The perrmission is ${this.perm}`);
    //}
//}

//==========================================//

//Getter and Setter Properties

//class User {
    //constructor(){
        //this.firstName = "Fernando";
        //this.lastName = "Rodriguez";
    //}

    //get fullName() {
        //return `${this.firstName} ${this.lastName}`
    //}

    //set fullName(value) {
        //value = value.split(" ");
        //this.firstName = value[0];
        //this.lastName = value[1];
    //}
//};

//let user = new User();
//user.fullName = "John Browning";
//console.log(user.fullName);

//===========================================//

//   1/14/21 Turn in

//class User {
    //set userName(username) {
        //if(username.lenght > 4){
            //this.username = username;
        //}else{
            //console.log(`Your UserName Needs to be longer then 4 charecters`);
        //}
    //}

    //set passWord(password) {
        //let hasNum = false;
        //for(let i = 0; i < password.lenght; i++){
            //if(isNaN(password[i]) == false){
                //hasNum = true;
            //}
        //}
        //if(password.lenght > 5 && hasNum == true){
            //this.password = password;
        //}else{
            //console.log(`You password must be atleast 5 charecters and have a number`);
        //}
    //}

    //get userName(){
        //return this.username;
    //}
    //get passWord(){
        //return this.password;
    //}
    //login(username, password){
        //if(username == this.username && password == this.password){
            //console.log(`Your Login in ${this.username}` );
        //}else{
            //console.log(`Your User name or Password is not found`);
        //}
    //}
//}


//let user = new User();
//user.userName = "sageMode";

//===============================================================================================================================//

//Extening Classes

//class Animal {   //Animal is the parent class
    //constructor(speed){
        //this.speed = speed;
    //}
    //run() {
        //distance += this.speed;
    //}

//}

//class Cat extends Animal {   //Cat is the child class
    //lives(live){
        //this.live = live;
    //}
//}

//============================================================================================//

//Seuper Method

//class Animal {
    //constructor(){
        //this.speed = 0;
        //this.name = name;
    //}
    //run(speed){
        //this.speed = speed;
        //console.log(`${this.name} runs with speed ${this.speed}`);
    //}
    //stop(){
        //this.speed = 0;
        //console.log(`${this.name} stand still`);
    //}
//}

//class Rabbit extends Animal{
    //hide(){
        //console.log(`${this.name} has sneek 100`);
    //}
    //stop(){
        //This overrides the parent method
    //}
    //stop(){
        //super.stop();
        //this.hide();
    //}
    //adding to the consturctor
    //constuctor(name, hops){
        //super(name);
        //this.hopes = hop;
    //}
//}

//let rabbit = new Rabbit("Peter");
//rabbit.run(12);
//rabbit.stop();

//===============================================================================================//

