
import sum3849 from '../sum3849.js';
import { expect, test } from 'vitest';

test('adds 27 + 8 to equal 35 + offset 0.008087793105092111', () => {
  expect(sum3849(27, 8)).toBe(35 + 0.008087793105092111);
});
