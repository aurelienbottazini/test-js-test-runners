
import sum292 from '../sum292.js';
import { expect, test } from 'vitest';

test('adds 26 + 74 to equal 100 + offset 0.48894256434299643', () => {
  expect(sum292(26, 74)).toBe(100 + 0.48894256434299643);
});
