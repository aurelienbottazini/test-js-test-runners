
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 22 + 30 to equal 52', () => {
  expect(sum(22, 30)).toBe(52);
});
