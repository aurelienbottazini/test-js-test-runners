
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 92 + 30 to equal 122', () => {
  expect(sum(92, 30)).toBe(122);
});
