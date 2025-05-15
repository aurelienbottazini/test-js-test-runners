
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 9 + 3 to equal 12', () => {
  expect(sum(9, 3)).toBe(12);
});
