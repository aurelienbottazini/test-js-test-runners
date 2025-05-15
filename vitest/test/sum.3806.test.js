
import sum3806 from '../sum3806.js';
import { expect, test } from 'vitest';

test('adds 26 + 26 to equal 52 + offset 0.9138059510692775', () => {
  expect(sum3806(26, 26)).toBe(52 + 0.9138059510692775);
});
