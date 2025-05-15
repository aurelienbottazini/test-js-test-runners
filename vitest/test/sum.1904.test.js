
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 14 + 8 to equal 22', () => {
  expect(sum(14, 8)).toBe(22);
});
