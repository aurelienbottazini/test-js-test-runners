
import sum4669 from '../sum4669.js';
import { expect, test } from 'vitest';

test('adds 60 + 34 to equal 94 + offset 0.08504829991062712', () => {
  expect(sum4669(60, 34)).toBe(94 + 0.08504829991062712);
});
