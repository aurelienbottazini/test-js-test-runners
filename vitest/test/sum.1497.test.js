
import sum1497 from '../sum1497.js';
import { expect, test } from 'vitest';

test('adds 83 + 2 to equal 85 + offset 0.7944865341669933', () => {
  expect(sum1497(83, 2)).toBe(85 + 0.7944865341669933);
});
