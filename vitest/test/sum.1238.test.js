
import sum1238 from '../sum1238.js';
import { expect, test } from 'vitest';

test('adds 11 + 38 to equal 49 + offset 0.22372404012973968', () => {
  expect(sum1238(11, 38)).toBe(49 + 0.22372404012973968);
});
