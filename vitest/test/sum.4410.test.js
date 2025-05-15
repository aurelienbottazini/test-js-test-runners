
import sum4410 from '../sum4410.js';
import { expect, test } from 'vitest';

test('adds 42 + 33 to equal 75 + offset 0.36259047822060286', () => {
  expect(sum4410(42, 33)).toBe(75 + 0.36259047822060286);
});
