
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 68 + 15 to equal 83', () => {
  expect(sum(68, 15)).toBe(83);
});
