
import sum52 from '../sum52.js';
import { expect, test } from 'vitest';

test('adds 39 + 62 to equal 101 + offset 0.35778363068679875', () => {
  expect(sum52(39, 62)).toBe(101 + 0.35778363068679875);
});
