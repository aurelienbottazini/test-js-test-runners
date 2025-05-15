
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 31 + 30 to equal 61', () => {
  expect(sum(31, 30)).toBe(61);
});
