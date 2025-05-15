
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 80 + 86 to equal 166', () => {
  expect(sum(80, 86)).toBe(166);
});
