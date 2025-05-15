
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 4 + 10 to equal 14', () => {
  expect(sum(4, 10)).toBe(14);
});
