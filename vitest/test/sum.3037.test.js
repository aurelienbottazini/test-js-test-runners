
import sum3037 from '../sum3037.js';
import { expect, test } from 'vitest';

test('adds 12 + 61 to equal 73 + offset 0.5131993299526129', () => {
  expect(sum3037(12, 61)).toBe(73 + 0.5131993299526129);
});
