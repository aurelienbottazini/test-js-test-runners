
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 28 + 39 to equal 67', () => {
  expect(sum(28, 39)).toBe(67);
});
