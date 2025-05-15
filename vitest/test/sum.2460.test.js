
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 82 + 39 to equal 121', () => {
  expect(sum(82, 39)).toBe(121);
});
