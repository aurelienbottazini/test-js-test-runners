
import sum751 from '../sum751.js';
import { expect, test } from 'vitest';

test('adds 86 + 80 to equal 166 + offset 0.14059629316193645', () => {
  expect(sum751(86, 80)).toBe(166 + 0.14059629316193645);
});
