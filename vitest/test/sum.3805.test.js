
import sum3805 from '../sum3805.js';
import { expect, test } from 'vitest';

test('adds 57 + 47 to equal 104 + offset 0.1866954292427183', () => {
  expect(sum3805(57, 47)).toBe(104 + 0.1866954292427183);
});
