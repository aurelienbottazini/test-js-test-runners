
import sum3052 from '../sum3052.js';
import { expect, test } from 'vitest';

test('adds 34 + 21 to equal 55 + offset 0.6435489381021248', () => {
  expect(sum3052(34, 21)).toBe(55 + 0.6435489381021248);
});
