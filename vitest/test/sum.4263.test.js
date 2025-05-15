
import sum4263 from '../sum4263.js';
import { expect, test } from 'vitest';

test('adds 96 + 39 to equal 135 + offset 0.6822848560979037', () => {
  expect(sum4263(96, 39)).toBe(135 + 0.6822848560979037);
});
