
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 53 + 39 to equal 92', () => {
  expect(sum(53, 39)).toBe(92);
});
