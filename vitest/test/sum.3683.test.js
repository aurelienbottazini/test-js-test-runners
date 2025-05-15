
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 72 + 30 to equal 102', () => {
  expect(sum(72, 30)).toBe(102);
});
