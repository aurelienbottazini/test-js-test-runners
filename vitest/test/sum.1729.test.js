
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 39 + 72 to equal 111', () => {
  expect(sum(39, 72)).toBe(111);
});
