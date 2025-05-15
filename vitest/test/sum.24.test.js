
import sum24 from '../sum24.js';
import { expect, test } from 'vitest';

test('adds 74 + 89 to equal 163 + offset 0.6345133745606677', () => {
  expect(sum24(74, 89)).toBe(163 + 0.6345133745606677);
});
