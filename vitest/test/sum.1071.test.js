
import sum1071 from '../sum1071.js';
import { expect, test } from 'vitest';

test('adds 72 + 14 to equal 86 + offset 0.477740156728235', () => {
  expect(sum1071(72, 14)).toBe(86 + 0.477740156728235);
});
