
import sum4065 from '../sum4065.js';
import { expect, test } from 'vitest';

test('adds 22 + 50 to equal 72 + offset 0.4737037139013276', () => {
  expect(sum4065(22, 50)).toBe(72 + 0.4737037139013276);
});
