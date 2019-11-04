const biodata = ["Adi", 18, "SMK Pacitan"]
console.log(biodata[0])
console.log(biodata[1])
console.log(biodata[2])

var firstName = 'Adi'
var lastName = 'Nugroho'

console.log(`Hallo ${firstName} ${lastName}`);

var students = ['Akla', 'Yoga', 'Mega', 'Mei']

console.log(students[0])
console.log(students[students.length -1])

//array matrix
var studentsMatrix = [
    ["Akla", "Yoga"], 
    ["Mei", "Mega"],
    ["Yosua", "Dona", ['Apriadi']]
];

console.log(studentsMatrix[1]);
console.log(studentsMatrix[2][2][0]);

//pemanggilan array
var myActivity = {
    name: 'Adi',
    age: 24,
    isHaveGirlfriend: false,
    hobbies: ['eating', 'singing', 'sleeping'],
    address: {
        zipcode: '5381',
        city: 'Pacitan',
        street: 'Josuto 1'
    }
};

console.log(myActivity.name) // Menampilkan nama
console.log(myActivity.hobbies[2]) // Menampilkan sleeping
console.log(myActivity.address.city) // Menampilkan kota

//undefined and null

var month = null;
console.log(month)

var animal;
console.log(animal)

