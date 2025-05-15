
import sum2094 from '../sum2094.js';
import { expect, test } from 'vitest';

test('adds 66 + 14 to equal 80 + offset 0.6470501622147772', () => {
  expect(sum2094(66, 14)).toBe(80 + 0.6470501622147772);
});
