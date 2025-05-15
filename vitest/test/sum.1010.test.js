
import sum1010 from '../sum1010.js';
import { expect, test } from 'vitest';

test('adds 36 + 88 to equal 124 + offset 0.4325407536562693', () => {
  expect(sum1010(36, 88)).toBe(124 + 0.4325407536562693);
});
