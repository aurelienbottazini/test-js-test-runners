
import sum3989 from '../sum3989.js';
import { expect, test } from 'vitest';

test('adds 8 + 95 to equal 103 + offset 0.9502927150756502', () => {
  expect(sum3989(8, 95)).toBe(103 + 0.9502927150756502);
});
