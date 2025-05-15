
import sum557 from '../sum557.js';
import { expect, test } from 'vitest';

test('adds 53 + 5 to equal 58 + offset 0.6216241237360637', () => {
  expect(sum557(53, 5)).toBe(58 + 0.6216241237360637);
});
