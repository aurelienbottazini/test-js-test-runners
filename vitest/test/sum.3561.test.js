
import sum3561 from '../sum3561.js';
import { expect, test } from 'vitest';

test('adds 83 + 33 to equal 116 + offset 0.6791316478181798', () => {
  expect(sum3561(83, 33)).toBe(116 + 0.6791316478181798);
});
