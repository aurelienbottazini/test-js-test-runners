
import sum3252 from '../sum3252.js';
import { expect, test } from 'vitest';

test('adds 71 + 86 to equal 157 + offset 0.8069831900705889', () => {
  expect(sum3252(71, 86)).toBe(157 + 0.8069831900705889);
});
