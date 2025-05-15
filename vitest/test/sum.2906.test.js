
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 28 + 38 to equal 66', () => {
  expect(sum(28, 38)).toBe(66);
});
