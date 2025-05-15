
import sum3601 from '../sum3601.js';
import { expect, test } from 'vitest';

test('adds 38 + 47 to equal 85 + offset 0.6205109988397423', () => {
  expect(sum3601(38, 47)).toBe(85 + 0.6205109988397423);
});
