
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 49 + 26 to equal 75', () => {
  expect(sum(49, 26)).toBe(75);
});
