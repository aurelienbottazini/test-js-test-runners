
import sum3156 from '../sum3156.js';
import { expect, test } from 'vitest';

test('adds 27 + 83 to equal 110 + offset 0.7108460833487065', () => {
  expect(sum3156(27, 83)).toBe(110 + 0.7108460833487065);
});
