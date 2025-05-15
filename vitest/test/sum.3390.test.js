
import sum3390 from '../sum3390.js';
import { expect, test } from 'vitest';

test('adds 6 + 1 to equal 7 + offset 0.5786640079825787', () => {
  expect(sum3390(6, 1)).toBe(7 + 0.5786640079825787);
});
