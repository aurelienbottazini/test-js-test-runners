
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 83 + 83 to equal 166', () => {
  expect(sum(83, 83)).toBe(166);
});
