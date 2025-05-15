
import sum3319 from '../sum3319.js';
import { expect, test } from 'vitest';

test('adds 80 + 47 to equal 127 + offset 0.5288505783158148', () => {
  expect(sum3319(80, 47)).toBe(127 + 0.5288505783158148);
});
