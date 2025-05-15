
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 44 + 3 to equal 47', () => {
  expect(sum(44, 3)).toBe(47);
});
