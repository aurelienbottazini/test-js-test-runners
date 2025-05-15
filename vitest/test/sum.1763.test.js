
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 38 + 86 to equal 124', () => {
  expect(sum(38, 86)).toBe(124);
});
