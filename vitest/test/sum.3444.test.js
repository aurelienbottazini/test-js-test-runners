
import sum3444 from '../sum3444.js';
import { expect, test } from 'vitest';

test('adds 37 + 85 to equal 122 + offset 0.472361417844983', () => {
  expect(sum3444(37, 85)).toBe(122 + 0.472361417844983);
});
