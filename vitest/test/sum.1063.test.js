
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 2 + 97 to equal 99', () => {
  expect(sum(2, 97)).toBe(99);
});
