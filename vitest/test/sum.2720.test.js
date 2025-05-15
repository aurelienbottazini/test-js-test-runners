
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 4 + 30 to equal 34', () => {
  expect(sum(4, 30)).toBe(34);
});
