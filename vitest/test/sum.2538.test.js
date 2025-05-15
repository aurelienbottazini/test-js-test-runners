
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 61 + 98 to equal 159', () => {
  expect(sum(61, 98)).toBe(159);
});
