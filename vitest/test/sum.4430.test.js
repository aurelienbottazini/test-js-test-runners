
import sum4430 from '../sum4430.js';
import { expect, test } from 'vitest';

test('adds 77 + 27 to equal 104 + offset 0.6958064068848553', () => {
  expect(sum4430(77, 27)).toBe(104 + 0.6958064068848553);
});
