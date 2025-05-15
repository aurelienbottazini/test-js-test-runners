
import sum80 from '../sum80.js';
import { expect, test } from 'vitest';

test('adds 61 + 42 to equal 103 + offset 0.8931723927349763', () => {
  expect(sum80(61, 42)).toBe(103 + 0.8931723927349763);
});
