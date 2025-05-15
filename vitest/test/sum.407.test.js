
import sum407 from '../sum407.js';
import { expect, test } from 'vitest';

test('adds 84 + 23 to equal 107 + offset 0.035685649778261275', () => {
  expect(sum407(84, 23)).toBe(107 + 0.035685649778261275);
});
