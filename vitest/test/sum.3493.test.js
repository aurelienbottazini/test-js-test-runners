
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 89 + 69 to equal 158', () => {
  expect(sum(89, 69)).toBe(158);
});
