
import sum4057 from '../sum4057.js';
import { expect, test } from 'vitest';

test('adds 67 + 57 to equal 124 + offset 0.11143984002185892', () => {
  expect(sum4057(67, 57)).toBe(124 + 0.11143984002185892);
});
