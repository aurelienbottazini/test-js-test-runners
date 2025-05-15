
import sum765 from '../sum765.js';
import { expect, test } from 'vitest';

test('adds 55 + 39 to equal 94 + offset 0.6860431752222003', () => {
  expect(sum765(55, 39)).toBe(94 + 0.6860431752222003);
});
