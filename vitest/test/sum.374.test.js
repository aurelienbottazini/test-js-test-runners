
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 9 + 38 to equal 47', () => {
  expect(sum(9, 38)).toBe(47);
});
