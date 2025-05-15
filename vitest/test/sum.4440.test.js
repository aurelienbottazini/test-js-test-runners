
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 89 + 77 to equal 166', () => {
  expect(sum(89, 77)).toBe(166);
});
