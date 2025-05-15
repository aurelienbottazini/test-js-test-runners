
import sum1392 from '../sum1392.js';
import { expect, test } from 'vitest';

test('adds 31 + 80 to equal 111 + offset 0.6511757640587716', () => {
  expect(sum1392(31, 80)).toBe(111 + 0.6511757640587716);
});
