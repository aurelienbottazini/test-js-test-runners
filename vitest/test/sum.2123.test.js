
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 38 + 12 to equal 50', () => {
  expect(sum(38, 12)).toBe(50);
});
