
import sum3455 from '../sum3455.js';
import { expect, test } from 'vitest';

test('adds 14 + 21 to equal 35 + offset 0.43242031188644403', () => {
  expect(sum3455(14, 21)).toBe(35 + 0.43242031188644403);
});
