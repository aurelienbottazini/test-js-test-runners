
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 86 + 30 to equal 116', () => {
  expect(sum(86, 30)).toBe(116);
});
