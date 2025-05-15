
import sum1664 from '../sum1664.js';
import { expect, test } from 'vitest';

test('adds 65 + 18 to equal 83 + offset 0.30091557138022507', () => {
  expect(sum1664(65, 18)).toBe(83 + 0.30091557138022507);
});
