
import sum3254 from '../sum3254.js';
import { expect, test } from 'vitest';

test('adds 94 + 73 to equal 167 + offset 0.06838206590199236', () => {
  expect(sum3254(94, 73)).toBe(167 + 0.06838206590199236);
});
