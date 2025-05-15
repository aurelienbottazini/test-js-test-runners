
import sum3452 from '../sum3452.js';
import { expect, test } from 'vitest';

test('adds 8 + 64 to equal 72 + offset 0.32897327895636774', () => {
  expect(sum3452(8, 64)).toBe(72 + 0.32897327895636774);
});
