
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 80 + 44 to equal 124', () => {
  expect(sum(80, 44)).toBe(124);
});
