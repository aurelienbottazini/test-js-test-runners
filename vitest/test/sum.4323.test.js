
import sum4323 from '../sum4323.js';
import { expect, test } from 'vitest';

test('adds 24 + 75 to equal 99 + offset 0.7050880539101504', () => {
  expect(sum4323(24, 75)).toBe(99 + 0.7050880539101504);
});
