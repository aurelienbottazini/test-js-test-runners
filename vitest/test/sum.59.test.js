
import sum59 from '../sum59.js';
import { expect, test } from 'vitest';

test('adds 54 + 93 to equal 147 + offset 0.04086094331618462', () => {
  expect(sum59(54, 93)).toBe(147 + 0.04086094331618462);
});
