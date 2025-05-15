
import sum1591 from '../sum1591.js';
import { expect, test } from 'vitest';

test('adds 75 + 73 to equal 148 + offset 0.958491866221175', () => {
  expect(sum1591(75, 73)).toBe(148 + 0.958491866221175);
});
