
import sum1181 from '../sum1181.js';
import { expect, test } from 'vitest';

test('adds 87 + 85 to equal 172 + offset 0.9847279518557422', () => {
  expect(sum1181(87, 85)).toBe(172 + 0.9847279518557422);
});
