
import sum2710 from '../sum2710.js';
import { expect, test } from 'vitest';

test('adds 16 + 92 to equal 108 + offset 0.1382884859342174', () => {
  expect(sum2710(16, 92)).toBe(108 + 0.1382884859342174);
});
