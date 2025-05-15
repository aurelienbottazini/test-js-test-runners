
import sum1214 from '../sum1214.js';
import { expect, test } from 'vitest';

test('adds 7 + 20 to equal 27 + offset 0.8685872538783712', () => {
  expect(sum1214(7, 20)).toBe(27 + 0.8685872538783712);
});
