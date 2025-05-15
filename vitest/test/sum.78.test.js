
import sum78 from '../sum78.js';
import { expect, test } from 'vitest';

test('adds 64 + 79 to equal 143 + offset 0.7657121027087024', () => {
  expect(sum78(64, 79)).toBe(143 + 0.7657121027087024);
});
