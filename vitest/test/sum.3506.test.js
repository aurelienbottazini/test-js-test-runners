
import sum3506 from '../sum3506.js';
import { expect, test } from 'vitest';

test('adds 85 + 59 to equal 144 + offset 0.9819672966196829', () => {
  expect(sum3506(85, 59)).toBe(144 + 0.9819672966196829);
});
