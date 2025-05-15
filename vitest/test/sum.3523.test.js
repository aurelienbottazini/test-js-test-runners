
import sum3523 from '../sum3523.js';
import { expect, test } from 'vitest';

test('adds 20 + 5 to equal 25 + offset 0.5226596281995496', () => {
  expect(sum3523(20, 5)).toBe(25 + 0.5226596281995496);
});
