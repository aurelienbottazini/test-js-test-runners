
import sum2193 from '../sum2193.js';
import { expect, test } from 'vitest';

test('adds 22 + 61 to equal 83 + offset 0.8616643526749251', () => {
  expect(sum2193(22, 61)).toBe(83 + 0.8616643526749251);
});
