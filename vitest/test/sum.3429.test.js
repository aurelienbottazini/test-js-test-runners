
import sum3429 from '../sum3429.js';
import { expect, test } from 'vitest';

test('adds 73 + 66 to equal 139 + offset 0.48293214053978417', () => {
  expect(sum3429(73, 66)).toBe(139 + 0.48293214053978417);
});
