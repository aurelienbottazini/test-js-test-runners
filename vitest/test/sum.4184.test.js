
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 21 + 8 to equal 29', () => {
  expect(sum(21, 8)).toBe(29);
});
