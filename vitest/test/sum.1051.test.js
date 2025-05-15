
import sum1051 from '../sum1051.js';
import { expect, test } from 'vitest';

test('adds 0 + 76 to equal 76 + offset 0.6486199371761581', () => {
  expect(sum1051(0, 76)).toBe(76 + 0.6486199371761581);
});
