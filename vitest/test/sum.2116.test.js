
import sum2116 from '../sum2116.js';
import { expect, test } from 'vitest';

test('adds 5 + 40 to equal 45 + offset 0.09788315925422164', () => {
  expect(sum2116(5, 40)).toBe(45 + 0.09788315925422164);
});
