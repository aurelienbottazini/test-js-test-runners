
import sum3736 from '../sum3736.js';
import { expect, test } from 'vitest';

test('adds 68 + 77 to equal 145 + offset 0.8901968702073629', () => {
  expect(sum3736(68, 77)).toBe(145 + 0.8901968702073629);
});
