
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 44 + 30 to equal 74', () => {
  expect(sum(44, 30)).toBe(74);
});
