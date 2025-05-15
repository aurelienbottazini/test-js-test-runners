
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 82 + 84 to equal 166', () => {
  expect(sum(82, 84)).toBe(166);
});
