
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 5 + 3 to equal 8', () => {
  expect(sum(5, 3)).toBe(8);
});
