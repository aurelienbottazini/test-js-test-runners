
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 26 + 39 to equal 65', () => {
  expect(sum(26, 39)).toBe(65);
});
