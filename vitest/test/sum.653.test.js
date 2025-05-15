
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 71 + 30 to equal 101', () => {
  expect(sum(71, 30)).toBe(101);
});
