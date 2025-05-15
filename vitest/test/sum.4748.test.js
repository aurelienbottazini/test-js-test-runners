
import sum4748 from '../sum4748.js';
import { expect, test } from 'vitest';

test('adds 39 + 16 to equal 55 + offset 0.5781804139261086', () => {
  expect(sum4748(39, 16)).toBe(55 + 0.5781804139261086);
});
