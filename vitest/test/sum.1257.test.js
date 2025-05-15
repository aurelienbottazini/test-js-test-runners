
import sum1257 from '../sum1257.js';
import { expect, test } from 'vitest';

test('adds 44 + 70 to equal 114 + offset 0.9309872609434617', () => {
  expect(sum1257(44, 70)).toBe(114 + 0.9309872609434617);
});
