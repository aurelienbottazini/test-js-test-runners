
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 43 + 2 to equal 45', () => {
  expect(sum(43, 2)).toBe(45);
});
