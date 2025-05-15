
import sum3848 from '../sum3848.js';
import { expect, test } from 'vitest';

test('adds 71 + 2 to equal 73 + offset 0.4795038445036409', () => {
  expect(sum3848(71, 2)).toBe(73 + 0.4795038445036409);
});
