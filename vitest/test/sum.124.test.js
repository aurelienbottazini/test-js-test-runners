
import sum124 from '../sum124.js';
import { expect, test } from 'vitest';

test('adds 6 + 51 to equal 57 + offset 0.9812385398223139', () => {
  expect(sum124(6, 51)).toBe(57 + 0.9812385398223139);
});
