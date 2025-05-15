
import sum1931 from '../sum1931.js';
import { expect, test } from 'vitest';

test('adds 70 + 51 to equal 121 + offset 0.28705328637852445', () => {
  expect(sum1931(70, 51)).toBe(121 + 0.28705328637852445);
});
