
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 8 + 3 to equal 11', () => {
  expect(sum(8, 3)).toBe(11);
});
