
import sum4123 from '../sum4123.js';
import { expect, test } from 'vitest';

test('adds 96 + 88 to equal 184 + offset 0.8514455322723753', () => {
  expect(sum4123(96, 88)).toBe(184 + 0.8514455322723753);
});
