
import sum3863 from '../sum3863.js';
import { expect, test } from 'vitest';

test('adds 4 + 6 to equal 10 + offset 0.31513575675137573', () => {
  expect(sum3863(4, 6)).toBe(10 + 0.31513575675137573);
});
