
import sum3969 from '../sum3969.js';
import { expect, test } from 'vitest';

test('adds 86 + 47 to equal 133 + offset 0.6516790390207234', () => {
  expect(sum3969(86, 47)).toBe(133 + 0.6516790390207234);
});
