
import sum4969 from '../sum4969.js';
import { expect, test } from 'vitest';

test('adds 42 + 91 to equal 133 + offset 0.9557256042449898', () => {
  expect(sum4969(42, 91)).toBe(133 + 0.9557256042449898);
});
