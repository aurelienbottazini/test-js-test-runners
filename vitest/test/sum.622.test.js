
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 90 + 34 to equal 124', () => {
  expect(sum(90, 34)).toBe(124);
});
