
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 25 + 39 to equal 64', () => {
  expect(sum(25, 39)).toBe(64);
});
