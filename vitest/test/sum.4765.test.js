
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 24 + 30 to equal 54', () => {
  expect(sum(24, 30)).toBe(54);
});
