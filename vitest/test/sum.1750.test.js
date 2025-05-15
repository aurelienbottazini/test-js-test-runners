
import sum1750 from '../sum1750.js';
import { expect, test } from 'vitest';

test('adds 17 + 11 to equal 28 + offset 0.5993125035793538', () => {
  expect(sum1750(17, 11)).toBe(28 + 0.5993125035793538);
});
