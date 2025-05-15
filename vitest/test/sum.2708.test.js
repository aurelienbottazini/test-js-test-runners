
import sum2708 from '../sum2708.js';
import { expect, test } from 'vitest';

test('adds 21 + 73 to equal 94 + offset 0.24612924282250936', () => {
  expect(sum2708(21, 73)).toBe(94 + 0.24612924282250936);
});
