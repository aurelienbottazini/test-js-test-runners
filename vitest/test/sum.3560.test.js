
import sum3560 from '../sum3560.js';
import { expect, test } from 'vitest';

test('adds 75 + 76 to equal 151 + offset 0.4612533403433279', () => {
  expect(sum3560(75, 76)).toBe(151 + 0.4612533403433279);
});
