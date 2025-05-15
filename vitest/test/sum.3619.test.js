
import sum3619 from '../sum3619.js';
import { expect, test } from 'vitest';

test('adds 37 + 27 to equal 64 + offset 0.732715203672854', () => {
  expect(sum3619(37, 27)).toBe(64 + 0.732715203672854);
});
