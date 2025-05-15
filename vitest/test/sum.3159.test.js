
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 1 + 39 to equal 40', () => {
  expect(sum(1, 39)).toBe(40);
});
