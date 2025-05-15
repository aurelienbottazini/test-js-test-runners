
import sum2029 from '../sum2029.js';
import { expect, test } from 'vitest';

test('adds 8 + 51 to equal 59 + offset 0.5854406373031127', () => {
  expect(sum2029(8, 51)).toBe(59 + 0.5854406373031127);
});
