
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 77 + 30 to equal 107', () => {
  expect(sum(77, 30)).toBe(107);
});
