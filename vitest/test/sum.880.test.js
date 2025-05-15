
import sum880 from '../sum880.js';
import { expect, test } from 'vitest';

test('adds 5 + 89 to equal 94 + offset 0.46533699301450115', () => {
  expect(sum880(5, 89)).toBe(94 + 0.46533699301450115);
});
