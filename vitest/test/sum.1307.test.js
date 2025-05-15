
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 92 + 39 to equal 131', () => {
  expect(sum(92, 39)).toBe(131);
});
