
import sum896 from '../sum896.js';
import { expect, test } from 'vitest';

test('adds 48 + 44 to equal 92 + offset 0.7016576203187', () => {
  expect(sum896(48, 44)).toBe(92 + 0.7016576203187);
});
