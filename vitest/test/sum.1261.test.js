
import sum1261 from '../sum1261.js';
import { expect, test } from 'vitest';

test('adds 71 + 65 to equal 136 + offset 0.8311943730309262', () => {
  expect(sum1261(71, 65)).toBe(136 + 0.8311943730309262);
});
