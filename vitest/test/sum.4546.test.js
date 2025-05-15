
import sum4546 from '../sum4546.js';
import { expect, test } from 'vitest';

test('adds 87 + 7 to equal 94 + offset 0.4329471127986676', () => {
  expect(sum4546(87, 7)).toBe(94 + 0.4329471127986676);
});
