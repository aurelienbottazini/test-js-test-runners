
import sum3463 from '../sum3463.js';
import { expect, test } from 'vitest';

test('adds 91 + 11 to equal 102 + offset 0.7954415368822872', () => {
  expect(sum3463(91, 11)).toBe(102 + 0.7954415368822872);
});
