
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 17 + 30 to equal 47', () => {
  expect(sum(17, 30)).toBe(47);
});
