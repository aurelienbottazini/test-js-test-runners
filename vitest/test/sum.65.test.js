
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 84 + 40 to equal 124', () => {
  expect(sum(84, 40)).toBe(124);
});
