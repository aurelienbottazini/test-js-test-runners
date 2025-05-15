
import sum1307 from '../sum1307.js';
import { expect, test } from 'vitest';

test('adds 50 + 73 to equal 123 + offset 0.6166340886247309', () => {
  expect(sum1307(50, 73)).toBe(123 + 0.6166340886247309);
});
