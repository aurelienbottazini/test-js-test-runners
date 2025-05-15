
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 58 + 30 to equal 88', () => {
  expect(sum(58, 30)).toBe(88);
});
