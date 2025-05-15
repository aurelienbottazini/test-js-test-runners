
import sum3941 from '../sum3941.js';
import { expect, test } from 'vitest';

test('adds 37 + 73 to equal 110 + offset 0.998106615868281', () => {
  expect(sum3941(37, 73)).toBe(110 + 0.998106615868281);
});
