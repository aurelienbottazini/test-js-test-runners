
import sum1033 from '../sum1033.js';
import { expect, test } from 'vitest';

test('adds 44 + 64 to equal 108 + offset 0.07072899048815151', () => {
  expect(sum1033(44, 64)).toBe(108 + 0.07072899048815151);
});
