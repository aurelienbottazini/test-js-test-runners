
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 1 + 13 to equal 14', () => {
  expect(sum(1, 13)).toBe(14);
});
