
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 95 + 30 to equal 125', () => {
  expect(sum(95, 30)).toBe(125);
});
