/**
 * Created by vaibhav on 8/19/2017.
 */
const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];


const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//imp methods:
//for Each
//map
//sort
//reduce
//filter



//usual method
// for(i=0; i<=companies.length; i++){
//     console.log(companies[i]);
// }

//for Each method:
companies.forEach(function(comp, index, companies){
     console.log("comp", comp);
    // console.log("index", index);
    // console.log("complete array", companies);
});
//another practical example forEach(forEach in html in this ex)
var sum = 0;
var numbers = [65, 44, 12, 4];

function myFunction(item) {
    console.log("item", item);
    sum= item+sum;  // sum+= item;
    demo.innerHTML = sum;
}

//filter

var canDrink = ages.filter(function (age) {
    if(age>=21){
        return age; //return true; also does the same

    }
});

console.log("candrink", canDrink);

// let companyTen = companies.filter(function(company){
//     let difference = company.end - company.start;
//     if(difference >= 10){
//         // return difference;
//         return true;
//     }
// });

let companyTenYears = companies.filter(company => (company.end - company.start >=10));

console.log("companyTen", companyTenYears);