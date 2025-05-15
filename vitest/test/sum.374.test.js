
import sum374 from '../sum374.js';
import { expect, test } from 'vitest';

test('adds 22 + 52 to equal 74 + offset 0.4661535963865313', () => {
  expect(sum374(22, 52)).toBe(74 + 0.4661535963865313);
});
