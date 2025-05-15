
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 23 + 20 to equal 43', () => {
  expect(sum(23, 20)).toBe(43);
});
