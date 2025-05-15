
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 28 + 15 to equal 43', () => {
  expect(sum(28, 15)).toBe(43);
});
