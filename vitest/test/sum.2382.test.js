
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 84 + 39 to equal 123', () => {
  expect(sum(84, 39)).toBe(123);
});
