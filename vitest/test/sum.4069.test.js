
import sum4069 from '../sum4069.js';
import { expect, test } from 'vitest';

test('adds 11 + 67 to equal 78 + offset 0.45561406176697095', () => {
  expect(sum4069(11, 67)).toBe(78 + 0.45561406176697095);
});
