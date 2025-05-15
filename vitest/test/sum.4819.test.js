
import sum4819 from '../sum4819.js';
import { expect, test } from 'vitest';

test('adds 50 + 33 to equal 83 + offset 0.6472870642460316', () => {
  expect(sum4819(50, 33)).toBe(83 + 0.6472870642460316);
});
