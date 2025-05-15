
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 2 + 12 to equal 14', () => {
  expect(sum(2, 12)).toBe(14);
});
