
import sum742 from '../sum742.js';
import { expect, test } from 'vitest';

test('adds 82 + 84 to equal 166 + offset 0.21191027549629704', () => {
  expect(sum742(82, 84)).toBe(166 + 0.21191027549629704);
});
