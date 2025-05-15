
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 33 + 98 to equal 131', () => {
  expect(sum(33, 98)).toBe(131);
});
