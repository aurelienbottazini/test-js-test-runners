
import sum1164 from '../sum1164.js';
import { expect, test } from 'vitest';

test('adds 28 + 32 to equal 60 + offset 0.8049431849002029', () => {
  expect(sum1164(28, 32)).toBe(60 + 0.8049431849002029);
});
