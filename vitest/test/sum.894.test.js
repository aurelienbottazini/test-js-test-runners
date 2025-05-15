
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 73 + 51 to equal 124', () => {
  expect(sum(73, 51)).toBe(124);
});
