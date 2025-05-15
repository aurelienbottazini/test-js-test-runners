
import sum4825 from '../sum4825.js';
import { expect, test } from 'vitest';

test('adds 31 + 26 to equal 57 + offset 0.2122363014354678', () => {
  expect(sum4825(31, 26)).toBe(57 + 0.2122363014354678);
});
