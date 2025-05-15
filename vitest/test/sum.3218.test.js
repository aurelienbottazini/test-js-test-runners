
import sum3218 from '../sum3218.js';
import { expect, test } from 'vitest';

test('adds 39 + 18 to equal 57 + offset 0.9641345430174715', () => {
  expect(sum3218(39, 18)).toBe(57 + 0.9641345430174715);
});
