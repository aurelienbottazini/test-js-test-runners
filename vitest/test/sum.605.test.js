
import sum605 from '../sum605.js';
import { expect, test } from 'vitest';

test('adds 54 + 77 to equal 131 + offset 0.6296745455312293', () => {
  expect(sum605(54, 77)).toBe(131 + 0.6296745455312293);
});
