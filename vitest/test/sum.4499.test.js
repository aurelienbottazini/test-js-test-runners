
import sum4499 from '../sum4499.js';
import { expect, test } from 'vitest';

test('adds 44 + 13 to equal 57 + offset 0.9656614843263052', () => {
  expect(sum4499(44, 13)).toBe(57 + 0.9656614843263052);
});
