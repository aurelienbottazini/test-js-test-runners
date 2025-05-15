
import sum858 from '../sum858.js';
import { expect, test } from 'vitest';

test('adds 22 + 49 to equal 71 + offset 0.07510022407956196', () => {
  expect(sum858(22, 49)).toBe(71 + 0.07510022407956196);
});
