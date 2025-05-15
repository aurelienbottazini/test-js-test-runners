
import sum1672 from '../sum1672.js';
import { expect, test } from 'vitest';

test('adds 40 + 52 to equal 92 + offset 0.9033069645310227', () => {
  expect(sum1672(40, 52)).toBe(92 + 0.9033069645310227);
});
