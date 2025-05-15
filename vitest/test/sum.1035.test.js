
import sum1035 from '../sum1035.js';
import { expect, test } from 'vitest';

test('adds 72 + 95 to equal 167 + offset 0.7090847463117201', () => {
  expect(sum1035(72, 95)).toBe(167 + 0.7090847463117201);
});
