
import sum411 from '../sum411.js';
import { expect, test } from 'vitest';

test('adds 23 + 3 to equal 26 + offset 0.9357124398774833', () => {
  expect(sum411(23, 3)).toBe(26 + 0.9357124398774833);
});
