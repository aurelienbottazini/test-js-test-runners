
import sum278 from '../sum278.js';
import { expect, test } from 'vitest';

test('adds 92 + 85 to equal 177 + offset 0.45141080196807915', () => {
  expect(sum278(92, 85)).toBe(177 + 0.45141080196807915);
});
