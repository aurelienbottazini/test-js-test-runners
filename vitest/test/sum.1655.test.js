
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 6 + 8 to equal 14', () => {
  expect(sum(6, 8)).toBe(14);
});
