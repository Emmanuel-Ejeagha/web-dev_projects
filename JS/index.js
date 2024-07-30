function myAge (age) {

    var yearsRemaining = 90 - age;
    var days = yearsRemaining * 365;
    var weeks = yearsRemaining * 52;
    var months = yearsRemaining * 12;

    console.log(`You have ${months} months, ${weeks} weeks, and ${days} days left`);
}

myAge(30)

