
import sum1730 from '../sum1730.js';
import { expect, test } from 'vitest';

test('adds 69 + 71 to equal 140 + offset 0.8325196292183606', () => {
  expect(sum1730(69, 71)).toBe(140 + 0.8325196292183606);
});
