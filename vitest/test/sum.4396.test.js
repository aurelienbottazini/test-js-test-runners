
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 73 + 93 to equal 166', () => {
  expect(sum(73, 93)).toBe(166);
});
