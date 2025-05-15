
import sum1012 from '../sum1012.js';
import { expect, test } from 'vitest';

test('adds 41 + 94 to equal 135 + offset 0.8471323558319531', () => {
  expect(sum1012(41, 94)).toBe(135 + 0.8471323558319531);
});
