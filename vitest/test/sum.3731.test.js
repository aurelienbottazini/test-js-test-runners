
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 87 + 79 to equal 166', () => {
  expect(sum(87, 79)).toBe(166);
});
