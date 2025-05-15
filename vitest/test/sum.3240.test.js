
import sum3240 from '../sum3240.js';
import { expect, test } from 'vitest';

test('adds 37 + 21 to equal 58 + offset 0.4333254130114931', () => {
  expect(sum3240(37, 21)).toBe(58 + 0.4333254130114931);
});
