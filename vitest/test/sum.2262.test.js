
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 12 + 10 to equal 22', () => {
  expect(sum(12, 10)).toBe(22);
});
