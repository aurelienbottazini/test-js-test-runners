
import sum884 from '../sum884.js';
import { expect, test } from 'vitest';

test('adds 74 + 54 to equal 128 + offset 0.300575312704496', () => {
  expect(sum884(74, 54)).toBe(128 + 0.300575312704496);
});
