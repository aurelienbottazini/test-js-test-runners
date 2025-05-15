
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 54 + 21 to equal 75', () => {
  expect(sum(54, 21)).toBe(75);
});
