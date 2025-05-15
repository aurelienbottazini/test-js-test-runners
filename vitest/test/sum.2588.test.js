
import sum2588 from '../sum2588.js';
import { expect, test } from 'vitest';

test('adds 41 + 40 to equal 81 + offset 0.4135705730471865', () => {
  expect(sum2588(41, 40)).toBe(81 + 0.4135705730471865);
});
