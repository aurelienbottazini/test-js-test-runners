
import sum3071 from '../sum3071.js';
import { expect, test } from 'vitest';

test('adds 41 + 42 to equal 83 + offset 0.38227682067029045', () => {
  expect(sum3071(41, 42)).toBe(83 + 0.38227682067029045);
});
