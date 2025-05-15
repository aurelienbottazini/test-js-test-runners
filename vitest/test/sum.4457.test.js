
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 39 + 6 to equal 45', () => {
  expect(sum(39, 6)).toBe(45);
});
