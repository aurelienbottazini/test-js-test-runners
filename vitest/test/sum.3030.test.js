
import sum3030 from '../sum3030.js';
import { expect, test } from 'vitest';

test('adds 35 + 92 to equal 127 + offset 0.817791507049036', () => {
  expect(sum3030(35, 92)).toBe(127 + 0.817791507049036);
});
