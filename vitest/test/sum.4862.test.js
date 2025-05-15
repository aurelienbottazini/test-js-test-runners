
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 47 + 39 to equal 86', () => {
  expect(sum(47, 39)).toBe(86);
});
