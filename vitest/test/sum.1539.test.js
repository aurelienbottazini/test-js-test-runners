
import sum1539 from '../sum1539.js';
import { expect, test } from 'vitest';

test('adds 83 + 84 to equal 167 + offset 0.616997786001453', () => {
  expect(sum1539(83, 84)).toBe(167 + 0.616997786001453);
});
