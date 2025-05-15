
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 39 + 10 to equal 49', () => {
  expect(sum(39, 10)).toBe(49);
});
