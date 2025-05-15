
import sum4004 from '../sum4004.js';
import { expect, test } from 'vitest';

test('adds 98 + 81 to equal 179 + offset 0.3691427022180269', () => {
  expect(sum4004(98, 81)).toBe(179 + 0.3691427022180269);
});
