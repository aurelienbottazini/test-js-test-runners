
import sum1364 from '../sum1364.js';
import { expect, test } from 'vitest';

test('adds 49 + 5 to equal 54 + offset 0.9246884136042586', () => {
  expect(sum1364(49, 5)).toBe(54 + 0.9246884136042586);
});
