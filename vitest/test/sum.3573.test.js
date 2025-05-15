
import sum3573 from '../sum3573.js';
import { expect, test } from 'vitest';

test('adds 22 + 73 to equal 95 + offset 0.6169984455903726', () => {
  expect(sum3573(22, 73)).toBe(95 + 0.6169984455903726);
});
