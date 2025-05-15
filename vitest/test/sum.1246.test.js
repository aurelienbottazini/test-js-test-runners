
import sum1246 from '../sum1246.js';
import { expect, test } from 'vitest';

test('adds 58 + 3 to equal 61 + offset 0.3369502748301191', () => {
  expect(sum1246(58, 3)).toBe(61 + 0.3369502748301191);
});
