
import sum3859 from '../sum3859.js';
import { expect, test } from 'vitest';

test('adds 4 + 83 to equal 87 + offset 0.993733064016641', () => {
  expect(sum3859(4, 83)).toBe(87 + 0.993733064016641);
});
