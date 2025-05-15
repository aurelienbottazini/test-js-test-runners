
import sum913 from '../sum913.js';
import { expect, test } from 'vitest';

test('adds 35 + 43 to equal 78 + offset 0.665051401262418', () => {
  expect(sum913(35, 43)).toBe(78 + 0.665051401262418);
});
