
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 28 + 96 to equal 124', () => {
  expect(sum(28, 96)).toBe(124);
});
