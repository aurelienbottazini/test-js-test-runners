
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 49 + 17 to equal 66', () => {
  expect(sum(49, 17)).toBe(66);
});
