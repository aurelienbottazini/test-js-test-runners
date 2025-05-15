
import sum3642 from '../sum3642.js';
import { expect, test } from 'vitest';

test('adds 67 + 13 to equal 80 + offset 0.8216712899580055', () => {
  expect(sum3642(67, 13)).toBe(80 + 0.8216712899580055);
});
