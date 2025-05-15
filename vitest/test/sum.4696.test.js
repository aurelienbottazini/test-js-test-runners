
import sum4696 from '../sum4696.js';
import { expect, test } from 'vitest';

test('adds 49 + 22 to equal 71 + offset 0.6112739858661074', () => {
  expect(sum4696(49, 22)).toBe(71 + 0.6112739858661074);
});
