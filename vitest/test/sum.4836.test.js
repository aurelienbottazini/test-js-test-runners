
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 82 + 97 to equal 179', () => {
  expect(sum(82, 97)).toBe(179);
});
