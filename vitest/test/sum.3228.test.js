
import sum3228 from '../sum3228.js';
import { expect, test } from 'vitest';

test('adds 26 + 84 to equal 110 + offset 0.3055527006710238', () => {
  expect(sum3228(26, 84)).toBe(110 + 0.3055527006710238);
});
