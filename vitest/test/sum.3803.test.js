
import sum3803 from '../sum3803.js';
import { expect, test } from 'vitest';

test('adds 71 + 78 to equal 149 + offset 0.6793434412082706', () => {
  expect(sum3803(71, 78)).toBe(149 + 0.6793434412082706);
});
