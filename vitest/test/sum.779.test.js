
import sum779 from '../sum779.js';
import { expect, test } from 'vitest';

test('adds 32 + 1 to equal 33 + offset 0.7430657071568857', () => {
  expect(sum779(32, 1)).toBe(33 + 0.7430657071568857);
});
