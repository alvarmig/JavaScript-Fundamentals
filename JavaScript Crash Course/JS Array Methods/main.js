const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

/*for (let i = 0; i < companies.length; i++) {
  console.log(companies[i]);
}*/

// forEach
companies.forEach(function(company) {
  console.log(company.name);
});

//filter

// let canDrink = [];

// get 21 and older
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] > 21) {
//     canDrink.push(ages[i]);
//   }
// }
// console.log(canDrink);

const canDrink = ages.filter(function(age) {
  if (age >= 21) return true;
});

const canDrink2 = ages.filter(age => age >= 21);

console.log(canDrink2);

// Filter the retail companies

const retailCompanies = companies.filter(function(company) {
  if (company.category === 'Retail') {
    return true;
  }
});

const retailCompanies2 = companies.filter(
  company => company.category === 'Retail'
);

console.log(retailCompanies2);

// get 80s companies

const eightiesCompanies = companies.filter(
  company => company.start >= 1980 && company.start < 1990
);

console.log(eightiesCompanies);

// get companies that lasted 10 years or more

const lastedTenYears = companies.filter(
  company => company.end - company.start >= 10
);

// map
// Create array of company names
const companyNames = companies.map(function(company) {
  return company.name;
});

const testMap = companies.map(function(company) {
  return `${company.name} [${company.start} - ${company.end}]`;
});

const testMap2 = companies.map(
  company => `${company.name} [${company.start} - ${company.end}]`
);

console.log(testMap2);

const ageSquare = ages.map(age => Math.sqrt(age));

// const ageMap = ages
//   .map(age => Math.sqrt(age))
//   .map(age => age * 2);

console.log(ageSquare);

// sort

// Sort companies by start year
const sortedCompanies = companies.sort(function(c1, c2) {
  if (c1.start > c2.start) {
    return 1;
  } else {
    return -1;
  }
});

const sortedCompanies2 = companies.sort((c1, c2) =>
  c1.start > c2.start ? 1 : -1
);

console.log(sortedCompanies2);

// sort ages
const sortAges = ages.sort((a, b) => a - b);
console.log(sortAges);

// reduce
let ageSum = 0;

for (var i = 0; i < ages.length; i++) {
  ageSum += ages[i];
}

let ageSum2 = ages.reduce(function(total, age) {
  return total + age;
}, 0);

let ageSum3 = ages.reduce((total, age) => total + age, 0);
console.log(ageSum3);

// total years for all companies
const totalYears = companies.reduce(function(total, company) {
  return total + (company.end - company.start);
}, 0);

const totalYears2 = companies.reduce(
  (total, company) => total + (company.end - company.start),
  0
);

console.log(totalYears2);

let ages2 = ages;
// Combine Methods
const combined = ages2
  .map(age => age * 2)
  .filter(age => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);

console.log(combined);
