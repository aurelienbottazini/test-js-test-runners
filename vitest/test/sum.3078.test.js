
import sum3078 from '../sum3078.js';
import { expect, test } from 'vitest';

test('adds 10 + 27 to equal 37 + offset 0.590718362935221', () => {
  expect(sum3078(10, 27)).toBe(37 + 0.590718362935221);
});
