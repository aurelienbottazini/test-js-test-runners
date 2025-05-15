
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 96 + 30 to equal 126', () => {
  expect(sum(96, 30)).toBe(126);
});
