//Правильний код

function checkAdult(age) {

  let setAge = age;

  try {
    if (setAge === undefined) {
      throw new Error("Please, enter your age");
    } else if (setAge <= 0) {
      throw new Error('Please, enter positive number')
    } else if (typeof setAge !== 'number') {
      throw new Error("Please, enter number");
    } else if (!Number.isInteger(setAge)) {
      throw new Error('Please, enter Integer number');
    } else if (setAge < 18 && setAge > 0) {
      throw new Error("Access denied - you are too young!");
    } else if (setAge > 18) {
      console.log('Access allowed');
    }
  } catch (e) {
    console.log(e.name, e.message);
  } finally {
    console.log('Age verification complete');
  }
};

checkAdult();
checkAdult(-22);
checkAdult("a25");
checkAdult(33.3);
checkAdult(16);
checkAdult(20);
