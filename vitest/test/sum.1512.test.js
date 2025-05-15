
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 86 + 38 to equal 124', () => {
  expect(sum(86, 38)).toBe(124);
});
