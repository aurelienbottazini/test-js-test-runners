
import sum559 from '../sum559.js';
import { expect, test } from 'vitest';

test('adds 93 + 68 to equal 161 + offset 0.13927835123792265', () => {
  expect(sum559(93, 68)).toBe(161 + 0.13927835123792265);
});
