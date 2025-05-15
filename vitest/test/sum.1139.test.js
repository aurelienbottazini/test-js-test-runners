
import sum1139 from '../sum1139.js';
import { expect, test } from 'vitest';

test('adds 80 + 4 to equal 84 + offset 0.37186331918249127', () => {
  expect(sum1139(80, 4)).toBe(84 + 0.37186331918249127);
});
