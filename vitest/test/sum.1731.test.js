
import sum1731 from '../sum1731.js';
import { expect, test } from 'vitest';

test('adds 73 + 56 to equal 129 + offset 0.36563306668105355', () => {
  expect(sum1731(73, 56)).toBe(129 + 0.36563306668105355);
});
