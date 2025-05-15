
import sum2522 from '../sum2522.js';
import { expect, test } from 'vitest';

test('adds 71 + 66 to equal 137 + offset 0.5625007810305683', () => {
  expect(sum2522(71, 66)).toBe(137 + 0.5625007810305683);
});
