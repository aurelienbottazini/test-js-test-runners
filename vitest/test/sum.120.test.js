
import sum120 from '../sum120.js';
import { expect, test } from 'vitest';

test('adds 15 + 47 to equal 62 + offset 0.25260497586431363', () => {
  expect(sum120(15, 47)).toBe(62 + 0.25260497586431363);
});
