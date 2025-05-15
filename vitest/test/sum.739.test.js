
import sum739 from '../sum739.js';
import { expect, test } from 'vitest';

test('adds 16 + 53 to equal 69 + offset 0.302641502855591', () => {
  expect(sum739(16, 53)).toBe(69 + 0.302641502855591);
});
