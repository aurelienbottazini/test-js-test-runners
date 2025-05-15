
import sum2263 from '../sum2263.js';
import { expect, test } from 'vitest';

test('adds 82 + 28 to equal 110 + offset 0.30089424124473574', () => {
  expect(sum2263(82, 28)).toBe(110 + 0.30089424124473574);
});
