
import sum4017 from '../sum4017.js';
import { expect, test } from 'vitest';

test('adds 54 + 6 to equal 60 + offset 0.815379773753725', () => {
  expect(sum4017(54, 6)).toBe(60 + 0.815379773753725);
});
