
import sum1826 from '../sum1826.js';
import { expect, test } from 'vitest';

test('adds 56 + 59 to equal 115 + offset 0.14957614629583316', () => {
  expect(sum1826(56, 59)).toBe(115 + 0.14957614629583316);
});
