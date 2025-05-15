
import sum3102 from '../sum3102.js';
import { expect, test } from 'vitest';

test('adds 70 + 7 to equal 77 + offset 0.5794934271328', () => {
  expect(sum3102(70, 7)).toBe(77 + 0.5794934271328);
});
