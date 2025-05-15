
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 4 + 8 to equal 12', () => {
  expect(sum(4, 8)).toBe(12);
});
