
import sum3039 from '../sum3039.js';
import { expect, test } from 'vitest';

test('adds 68 + 23 to equal 91 + offset 0.09705729216379566', () => {
  expect(sum3039(68, 23)).toBe(91 + 0.09705729216379566);
});
