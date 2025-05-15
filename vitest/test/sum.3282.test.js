
import sum3282 from '../sum3282.js';
import { expect, test } from 'vitest';

test('adds 35 + 44 to equal 79 + offset 0.7927548743702133', () => {
  expect(sum3282(35, 44)).toBe(79 + 0.7927548743702133);
});
