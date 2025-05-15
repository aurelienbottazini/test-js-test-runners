
import sum849 from '../sum849.js';
import { expect, test } from 'vitest';

test('adds 99 + 67 to equal 166 + offset 0.97732468412769', () => {
  expect(sum849(99, 67)).toBe(166 + 0.97732468412769);
});
