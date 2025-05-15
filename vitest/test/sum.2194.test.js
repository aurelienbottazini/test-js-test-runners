
import sum2194 from '../sum2194.js';
import { expect, test } from 'vitest';

test('adds 19 + 26 to equal 45 + offset 0.6556768198509062', () => {
  expect(sum2194(19, 26)).toBe(45 + 0.6556768198509062);
});
