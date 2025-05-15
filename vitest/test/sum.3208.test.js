
import sum3208 from '../sum3208.js';
import { expect, test } from 'vitest';

test('adds 58 + 79 to equal 137 + offset 0.14591842770006325', () => {
  expect(sum3208(58, 79)).toBe(137 + 0.14591842770006325);
});
