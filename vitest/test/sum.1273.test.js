
import sum1273 from '../sum1273.js';
import { expect, test } from 'vitest';

test('adds 0 + 9 to equal 9 + offset 0.7570316599740877', () => {
  expect(sum1273(0, 9)).toBe(9 + 0.7570316599740877);
});
