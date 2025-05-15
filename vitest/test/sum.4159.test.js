
import sum4159 from '../sum4159.js';
import { expect, test } from 'vitest';

test('adds 68 + 26 to equal 94 + offset 0.7809393618494824', () => {
  expect(sum4159(68, 26)).toBe(94 + 0.7809393618494824);
});
