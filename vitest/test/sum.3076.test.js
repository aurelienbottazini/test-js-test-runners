
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 69 + 75 to equal 144', () => {
  expect(sum(69, 75)).toBe(144);
});
