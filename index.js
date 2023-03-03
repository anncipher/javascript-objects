// 1. CONSTRUCTOR FUNCTION
function InstagramPost (HandleofAuthor, Content, AnImageLinkPostedbytheAuthorofthePost, NumberofViews, NumberofLikes) {
   this.HandleofAuthor = HandleofAuthor;
   this.Content = Content;
   this.AnImageLinkPostedbytheAuthorofthePost = AnImageLinkPostedbytheAuthorofthePost;
   this.NumberofViews = NumberofViews;
   this.NumberofLikes = NumberofLikes;
}


// 2. CREATING OBJECTS USING CONSTRUCTOR FUNCTION
const InstagramPost1 = new InstagramPost('@gemstone.collections', 'Gorgeous', 'https://i0.wp.com/www.hadviser.com/wp-content/uploads/2021/05/43-shoulder-grazing-hair-with-highlights-CN2rWH6BIkw.jpg?resize=1023%2C1065&ssl=1', '1,238 views', '710 likes');
console.log(InstagramPost1)

const InstagramPost2 = new InstagramPost('@cliffhairmpire', 'Let Us Glam You On Your Big Day', 'https://i.pinimg.com/originals/0c/62/d8/0c62d8675811ad3235a7cbf85532e344.jpg', '2,043 views', '1,000 likes');
console.log(InstagramPost2)


// 3. FACTORY METHOD
// a) createPerson Factory Function
function createPerson (Name, Age, Location) {
   return {
      Name: Name,
      Age: Age,
      Location: Location,
   }
}

// Creating Object 
const Person = createPerson ('Musa', '19 years', 'Lekki, Lagos State');
console.log(Person)

// b) createjambScores Factory Function
function createjambScores (ENG, GOVT, LIT, CRK) {
   return {
      ENG: ENG,
      GOVT: GOVT,
      LIT: LIT,
      CRK: CRK,
   }
}

// Creating Object
const jambScores = createjambScores (70, 85, 82, 94);
console.log(jambScores)

// Merging createjambScores and createPerson
const student = {
   Name: 'Musa',
   Age: '19 years',
   Location: 'Lekki, Lagos State',
   jambScores: {
      ENG: 70,
      GOVT: 85,
      LIT: 82,
      CRK: 94,
   }
}
console.log(student)


// 4. CLONING AN OBJECT
const Straightener1 = {
   Brand: 'Kipozi',
   Plug: 'UK',
   PlateSize: '1.5 inch',
   SteamActivated: false,
}
console.log(Straightener1)

// Clone 1 - Using Object.assign ()
const Straightener2 = Object.assign ({}, Straightener1);
Straightener2.Brand = 'Loreal',
Straightener2.Plug = 'EU',
Straightener2.PlateSize = '2.5 inches',
Straightener2.SteamActivated = true

console.log(Straightener2)

// Clone 2 - Using Spread Syntax, i.e., ...
const Straightener3 = {...Straightener1};
Straightener3.Brand = 'Salon Maxx',
Straightener3.PlateSize = 'Pixie',

console.log(Straightener3)

// Clone 3 - Using JSON.parse(JSON.stringify())
const Straightener4 = JSON.parse(JSON.stringify(Straightener1));
Straightener4.Brand = 'Cloud Nine',
Straightener4.PlateSize = '2.5 inches',

console.log(Straightener4)


// 5. ENUMERATION METHODS
const presidentialCandidates = {
   'AAC': 'Omoyele Sowore',
   'ACCORD': 'Christopher Imumolen',
   'APC': 'Bola Ahmed Tinubu',
   'LP': 'Peter Obi',
   'NNPP': 'Rabiu Kwankwo',
   'PDP': 'Atiku Abubakar'
}

for (const key in presidentialCandidates) {
   console.log("'" + presidentialCandidates[key] + " is the presidential candidate of " + key + "'" + ".");
}
