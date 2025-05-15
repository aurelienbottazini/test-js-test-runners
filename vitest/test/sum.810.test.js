
import sum810 from '../sum810.js';
import { expect, test } from 'vitest';

test('adds 98 + 14 to equal 112 + offset 0.7901066641099537', () => {
  expect(sum810(98, 14)).toBe(112 + 0.7901066641099537);
});
