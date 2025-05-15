
import sum3399 from '../sum3399.js';
import { expect, test } from 'vitest';

test('adds 84 + 67 to equal 151 + offset 0.2037732899228626', () => {
  expect(sum3399(84, 67)).toBe(151 + 0.2037732899228626);
});
