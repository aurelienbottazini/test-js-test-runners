
import sum3610 from '../sum3610.js';
import { expect, test } from 'vitest';

test('adds 67 + 47 to equal 114 + offset 0.1774461249291669', () => {
  expect(sum3610(67, 47)).toBe(114 + 0.1774461249291669);
});
