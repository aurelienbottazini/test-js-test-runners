
import sum3490 from '../sum3490.js';
import { expect, test } from 'vitest';

test('adds 97 + 47 to equal 144 + offset 0.6616112596788147', () => {
  expect(sum3490(97, 47)).toBe(144 + 0.6616112596788147);
});
