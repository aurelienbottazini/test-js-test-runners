
import sum4660 from '../sum4660.js';
import { expect, test } from 'vitest';

test('adds 8 + 39 to equal 47 + offset 0.9519123447580674', () => {
  expect(sum4660(8, 39)).toBe(47 + 0.9519123447580674);
});
