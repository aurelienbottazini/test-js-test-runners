
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 61 + 97 to equal 158', () => {
  expect(sum(61, 97)).toBe(158);
});
