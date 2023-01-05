function spyOn(fn) {
  // Your code here:
  let callCount = 0;
  const calledWith = {},
    returnedValues = {};

  function spy(...args) {
    callCount++;
    args.forEach(arg => (calledWith[arg] = true));
    const returnValue = fn(...args);
    returnedValues[returnValue] = true;

    return returnValue;
  }

  spy.getCallCount = () => callCount;
  spy.wasCalledWith = val => !!calledWith[val];
  spy.returned = val => returnedValues.hasOwnProperty(val);

  return spy;
}

function adder(n1, n2) { return n1 + n2; }
const adderSpy = spyOn(adder);
console.log(
  adderSpy.getCallCount() // 0
)
console.log(
  adderSpy(2, 4) // returns 6
)
console.log(
  adderSpy.getCallCount() // 1
)
console.log(
  adderSpy(3, 5) // returns 8
)
console.log(
  adderSpy.getCallCount() // 2
)
console.log(
  adderSpy.wasCalledWith(2) // true
)
console.log(
  adderSpy.wasCalledWith(0) // false
)
console.log(
  adderSpy.returned(6) // true
)
console.log(
  adderSpy.returned(9) // false
)

module.exports = spyOn
