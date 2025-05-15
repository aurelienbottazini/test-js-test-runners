
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 26 + 30 to equal 56', () => {
  expect(sum(26, 30)).toBe(56);
});
