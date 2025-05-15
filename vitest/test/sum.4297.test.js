
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 13 + 98 to equal 111', () => {
  expect(sum(13, 98)).toBe(111);
});
