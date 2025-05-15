
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 41 + 12 to equal 53', () => {
  expect(sum(41, 12)).toBe(53);
});
