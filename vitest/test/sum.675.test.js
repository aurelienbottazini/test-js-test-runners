
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 98 + 3 to equal 101', () => {
  expect(sum(98, 3)).toBe(101);
});
