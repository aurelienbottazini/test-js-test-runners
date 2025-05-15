
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 94 + 72 to equal 166', () => {
  expect(sum(94, 72)).toBe(166);
});
