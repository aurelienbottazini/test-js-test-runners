
import sum3717 from '../sum3717.js';
import { expect, test } from 'vitest';

test('adds 39 + 73 to equal 112 + offset 0.7916338532910963', () => {
  expect(sum3717(39, 73)).toBe(112 + 0.7916338532910963);
});
