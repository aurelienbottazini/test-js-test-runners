
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 54 + 70 to equal 124', () => {
  expect(sum(54, 70)).toBe(124);
});
