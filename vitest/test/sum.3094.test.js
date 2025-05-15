
import sum3094 from '../sum3094.js';
import { expect, test } from 'vitest';

test('adds 3 + 51 to equal 54 + offset 0.4908782197754471', () => {
  expect(sum3094(3, 51)).toBe(54 + 0.4908782197754471);
});
