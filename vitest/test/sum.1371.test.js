
import sum1371 from '../sum1371.js';
import { expect, test } from 'vitest';

test('adds 47 + 76 to equal 123 + offset 0.8548486687837207', () => {
  expect(sum1371(47, 76)).toBe(123 + 0.8548486687837207);
});
