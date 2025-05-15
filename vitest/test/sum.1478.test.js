
import sum1478 from '../sum1478.js';
import { expect, test } from 'vitest';

test('adds 44 + 50 to equal 94 + offset 0.9877653190403917', () => {
  expect(sum1478(44, 50)).toBe(94 + 0.9877653190403917);
});
