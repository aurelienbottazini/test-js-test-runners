
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 11 + 72 to equal 83', () => {
  expect(sum(11, 72)).toBe(83);
});
