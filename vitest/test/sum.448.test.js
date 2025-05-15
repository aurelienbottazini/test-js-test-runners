
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 60 + 6 to equal 66', () => {
  expect(sum(60, 6)).toBe(66);
});
