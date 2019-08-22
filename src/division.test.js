const division = require('./division');

test('Divide 10 by 2 to equal 5', () => {
  expect(division(10, 2)).toBe(5);
});

test('Divide by 0 expect to throw', () => {
  expect(
    () => { division(10, 0) }
  ).toThrow();
});
