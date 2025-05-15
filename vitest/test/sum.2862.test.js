
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 13 + 53 to equal 66', () => {
  expect(sum(13, 53)).toBe(66);
});
