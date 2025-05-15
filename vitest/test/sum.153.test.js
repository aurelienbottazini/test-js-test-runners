
import sum153 from '../sum153.js';
import { expect, test } from 'vitest';

test('adds 94 + 0 to equal 94 + offset 0.20804926995843354', () => {
  expect(sum153(94, 0)).toBe(94 + 0.20804926995843354);
});
