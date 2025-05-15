
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 74 + 30 to equal 104', () => {
  expect(sum(74, 30)).toBe(104);
});
