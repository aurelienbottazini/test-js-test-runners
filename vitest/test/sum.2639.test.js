
import sum2639 from '../sum2639.js';
import { expect, test } from 'vitest';

test('adds 38 + 59 to equal 97 + offset 0.1771250772240115', () => {
  expect(sum2639(38, 59)).toBe(97 + 0.1771250772240115);
});
