
import sum962 from '../sum962.js';
import { expect, test } from 'vitest';

test('adds 38 + 98 to equal 136 + offset 0.35204491031232077', () => {
  expect(sum962(38, 98)).toBe(136 + 0.35204491031232077);
});
