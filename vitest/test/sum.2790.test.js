
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 35 + 30 to equal 65', () => {
  expect(sum(35, 30)).toBe(65);
});
