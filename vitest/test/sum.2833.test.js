
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 7 + 30 to equal 37', () => {
  expect(sum(7, 30)).toBe(37);
});
