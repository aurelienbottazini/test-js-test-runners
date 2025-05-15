
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 13 + 10 to equal 23', () => {
  expect(sum(13, 10)).toBe(23);
});
