
import sum4496 from '../sum4496.js';
import { expect, test } from 'vitest';

test('adds 64 + 23 to equal 87 + offset 0.466475001761119', () => {
  expect(sum4496(64, 23)).toBe(87 + 0.466475001761119);
});
