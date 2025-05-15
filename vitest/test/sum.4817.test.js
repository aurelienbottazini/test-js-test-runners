
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 74 + 92 to equal 166', () => {
  expect(sum(74, 92)).toBe(166);
});
