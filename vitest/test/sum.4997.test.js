
import sum4997 from '../sum4997.js';
import { expect, test } from 'vitest';

test('adds 94 + 72 to equal 166 + offset 0.035879762787671465', () => {
  expect(sum4997(94, 72)).toBe(166 + 0.035879762787671465);
});
