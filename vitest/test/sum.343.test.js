
import sum343 from '../sum343.js';
import { expect, test } from 'vitest';

test('adds 39 + 11 to equal 50 + offset 0.4305691827152721', () => {
  expect(sum343(39, 11)).toBe(50 + 0.4305691827152721);
});
