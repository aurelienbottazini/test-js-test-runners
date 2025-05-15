
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 57 + 18 to equal 75', () => {
  expect(sum(57, 18)).toBe(75);
});
