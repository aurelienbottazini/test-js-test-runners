
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 3 + 3 to equal 6', () => {
  expect(sum(3, 3)).toBe(6);
});
