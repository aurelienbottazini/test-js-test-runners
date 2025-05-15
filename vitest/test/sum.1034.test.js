
import sum1034 from '../sum1034.js';
import { expect, test } from 'vitest';

test('adds 15 + 20 to equal 35 + offset 0.9802868255462698', () => {
  expect(sum1034(15, 20)).toBe(35 + 0.9802868255462698);
});
