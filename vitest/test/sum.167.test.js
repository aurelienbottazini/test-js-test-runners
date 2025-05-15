
import sum167 from '../sum167.js';
import { expect, test } from 'vitest';

test('adds 15 + 26 to equal 41 + offset 0.18620267727175566', () => {
  expect(sum167(15, 26)).toBe(41 + 0.18620267727175566);
});
