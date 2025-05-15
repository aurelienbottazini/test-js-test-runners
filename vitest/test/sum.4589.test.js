
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 13 + 5 to equal 18', () => {
  expect(sum(13, 5)).toBe(18);
});
