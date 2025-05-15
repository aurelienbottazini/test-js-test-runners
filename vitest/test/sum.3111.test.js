
import sum3111 from '../sum3111.js';
import { expect, test } from 'vitest';

test('adds 60 + 32 to equal 92 + offset 0.0526815379715182', () => {
  expect(sum3111(60, 32)).toBe(92 + 0.0526815379715182);
});
