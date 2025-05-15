
import sum4421 from '../sum4421.js';
import { expect, test } from 'vitest';

test('adds 28 + 52 to equal 80 + offset 0.7493749188522445', () => {
  expect(sum4421(28, 52)).toBe(80 + 0.7493749188522445);
});
