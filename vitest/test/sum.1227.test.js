
import sum1227 from '../sum1227.js';
import { expect, test } from 'vitest';

test('adds 76 + 73 to equal 149 + offset 0.21773330092276766', () => {
  expect(sum1227(76, 73)).toBe(149 + 0.21773330092276766);
});
