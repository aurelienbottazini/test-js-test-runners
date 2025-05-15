
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 15 + 12 to equal 27', () => {
  expect(sum(15, 12)).toBe(27);
});
