
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 90 + 98 to equal 188', () => {
  expect(sum(90, 98)).toBe(188);
});
