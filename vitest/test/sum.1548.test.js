
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 4 + 3 to equal 7', () => {
  expect(sum(4, 3)).toBe(7);
});
