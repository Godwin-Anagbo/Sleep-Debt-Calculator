const getSleepHours = day => {
if (day === 'monday') {
    return 8;
  } else if (day === 'tuesday') {
    return 7;
  }else if (day === 'wednesday') {
    return 6;
  }else if (day === 'thursday') {
    return 5;
  }else if (day === 'friday') {
    return 12;
  }else if (day === 'saturday') {
    return 8;
  }else if (day === 'sunday') {
    return 6;
  }
};
console.log(getSleepHours('tuesday'));

/*const getActualSleepHours = () => 
getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');*/

const getActualSleepHours = () => 8 +7 +6 +5 +12 +8 +6;

//const getIdealSleepHours = idealHours => idealHours * 7;

const getIdealSleepHours = () => {
  let idealHours = 7;
  return idealHours * 7;
}

console.log(getActualSleepHours());
console.log(getIdealSleepHours());

const calculateSleepDebt = () =>{
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    return 'You got the perfect Amount of Sleep. You got'+ actualSleepHours +'this week';
  } else if (actualSleepHours > idealSleepHours){
    return 'You got more than Needed sleep. You slept' + (idealSleepHours - actualSleepHours)+' more hours this week';
  } else {
    return 'You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.'
  }
}
console.log(calculateSleepDebt());

