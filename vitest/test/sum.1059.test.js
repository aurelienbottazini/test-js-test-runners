
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 1 + 91 to equal 92', () => {
  expect(sum(1, 91)).toBe(92);
});
