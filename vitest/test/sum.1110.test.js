
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 61 + 38 to equal 99', () => {
  expect(sum(61, 38)).toBe(99);
});
