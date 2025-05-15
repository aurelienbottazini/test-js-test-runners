
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 49 + 39 to equal 88', () => {
  expect(sum(49, 39)).toBe(88);
});
