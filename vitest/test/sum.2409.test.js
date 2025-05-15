
import sum2409 from '../sum2409.js';
import { expect, test } from 'vitest';

test('adds 50 + 43 to equal 93 + offset 0.9993815513761424', () => {
  expect(sum2409(50, 43)).toBe(93 + 0.9993815513761424);
});
