
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 9 + 13 to equal 22', () => {
  expect(sum(9, 13)).toBe(22);
});
