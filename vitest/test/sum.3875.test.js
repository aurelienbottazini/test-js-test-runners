
import sum3875 from '../sum3875.js';
import { expect, test } from 'vitest';

test('adds 55 + 23 to equal 78 + offset 0.22776622145254966', () => {
  expect(sum3875(55, 23)).toBe(78 + 0.22776622145254966);
});
