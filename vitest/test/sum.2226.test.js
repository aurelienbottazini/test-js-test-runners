
import sum2226 from '../sum2226.js';
import { expect, test } from 'vitest';

test('adds 82 + 67 to equal 149 + offset 0.6881572941846049', () => {
  expect(sum2226(82, 67)).toBe(149 + 0.6881572941846049);
});
