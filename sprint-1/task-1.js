function getModifiedArray(array) {
    
  const cop = [...array];
  const f = cop.shift();
  const l = cop.pop();
  return ['Start', ...cop, 'End']

};

console.log(getModifiedArray([12, 6, 22, 0, -8]));
console.log(getModifiedArray(["Kate", "Peter", "Mark", "Sam"]));
console.log(getModifiedArray([false, 10, 'mail', true, 20, 30]));
console.log(getModifiedArray([100, 200]));

const arr1 = [false, 10, 'mail', true, 20, 30];
getModifiedArray(arr1)
console.log(arr1);

const arr2 = [100, 200];
getModifiedArray(arr2)
console.log(arr2);
