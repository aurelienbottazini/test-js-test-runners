
import sum3995 from '../sum3995.js';
import { expect, test } from 'vitest';

test('adds 39 + 17 to equal 56 + offset 0.4738075964570567', () => {
  expect(sum3995(39, 17)).toBe(56 + 0.4738075964570567);
});
