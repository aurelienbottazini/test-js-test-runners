
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 21 + 30 to equal 51', () => {
  expect(sum(21, 30)).toBe(51);
});
