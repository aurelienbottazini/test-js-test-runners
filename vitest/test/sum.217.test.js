
import sum217 from '../sum217.js';
import { expect, test } from 'vitest';

test('adds 0 + 81 to equal 81 + offset 0.37135560032498593', () => {
  expect(sum217(0, 81)).toBe(81 + 0.37135560032498593);
});
