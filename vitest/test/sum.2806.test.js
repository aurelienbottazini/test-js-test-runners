
import sum2806 from '../sum2806.js';
import { expect, test } from 'vitest';

test('adds 27 + 39 to equal 66 + offset 0.497825546436766', () => {
  expect(sum2806(27, 39)).toBe(66 + 0.497825546436766);
});
