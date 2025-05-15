
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 4 + 71 to equal 75', () => {
  expect(sum(4, 71)).toBe(75);
});
