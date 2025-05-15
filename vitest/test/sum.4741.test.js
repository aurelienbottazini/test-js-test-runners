
import sum4741 from '../sum4741.js';
import { expect, test } from 'vitest';

test('adds 64 + 51 to equal 115 + offset 0.04541136749298136', () => {
  expect(sum4741(64, 51)).toBe(115 + 0.04541136749298136);
});
