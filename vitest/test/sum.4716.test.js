
import sum4716 from '../sum4716.js';
import { expect, test } from 'vitest';

test('adds 9 + 90 to equal 99 + offset 0.5946450719360065', () => {
  expect(sum4716(9, 90)).toBe(99 + 0.5946450719360065);
});
