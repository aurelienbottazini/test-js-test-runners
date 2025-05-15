
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 21 + 1 to equal 22', () => {
  expect(sum(21, 1)).toBe(22);
});
