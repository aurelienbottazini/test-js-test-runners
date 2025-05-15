
import sum3466 from '../sum3466.js';
import { expect, test } from 'vitest';

test('adds 10 + 56 to equal 66 + offset 0.8490423346995077', () => {
  expect(sum3466(10, 56)).toBe(66 + 0.8490423346995077);
});
