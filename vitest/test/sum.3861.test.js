
import sum3861 from '../sum3861.js';
import { expect, test } from 'vitest';

test('adds 3 + 75 to equal 78 + offset 0.7422888832055293', () => {
  expect(sum3861(3, 75)).toBe(78 + 0.7422888832055293);
});
