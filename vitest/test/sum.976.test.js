
import sum976 from '../sum976.js';
import { expect, test } from 'vitest';

test('adds 83 + 79 to equal 162 + offset 0.9398617656600387', () => {
  expect(sum976(83, 79)).toBe(162 + 0.9398617656600387);
});
