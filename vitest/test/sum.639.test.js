
import sum639 from '../sum639.js';
import { expect, test } from 'vitest';

test('adds 41 + 38 to equal 79 + offset 0.5624927909765741', () => {
  expect(sum639(41, 38)).toBe(79 + 0.5624927909765741);
});
