
import sum100 from '../sum100.js';
import { expect, test } from 'vitest';

test('adds 30 + 12 to equal 42 + offset 0.7955166811215642', () => {
  expect(sum100(30, 12)).toBe(42 + 0.7955166811215642);
});
