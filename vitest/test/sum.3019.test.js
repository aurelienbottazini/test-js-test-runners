
import sum3019 from '../sum3019.js';
import { expect, test } from 'vitest';

test('adds 86 + 67 to equal 153 + offset 0.7799973145267237', () => {
  expect(sum3019(86, 67)).toBe(153 + 0.7799973145267237);
});
