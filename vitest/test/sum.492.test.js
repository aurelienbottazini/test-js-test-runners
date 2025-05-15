
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 85 + 81 to equal 166', () => {
  expect(sum(85, 81)).toBe(166);
});
