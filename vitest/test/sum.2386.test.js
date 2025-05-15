
import sum2386 from '../sum2386.js';
import { expect, test } from 'vitest';

test('adds 31 + 49 to equal 80 + offset 0.2232226244073251', () => {
  expect(sum2386(31, 49)).toBe(80 + 0.2232226244073251);
});
