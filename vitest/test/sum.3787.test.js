
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 22 + 39 to equal 61', () => {
  expect(sum(22, 39)).toBe(61);
});
