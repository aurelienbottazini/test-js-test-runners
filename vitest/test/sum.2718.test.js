
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 36 + 30 to equal 66', () => {
  expect(sum(36, 30)).toBe(66);
});
