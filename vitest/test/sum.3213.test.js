
import sum3213 from '../sum3213.js';
import { expect, test } from 'vitest';

test('adds 20 + 51 to equal 71 + offset 0.862917116007944', () => {
  expect(sum3213(20, 51)).toBe(71 + 0.862917116007944);
});
