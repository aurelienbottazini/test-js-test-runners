
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 51 + 73 to equal 124', () => {
  expect(sum(51, 73)).toBe(124);
});
