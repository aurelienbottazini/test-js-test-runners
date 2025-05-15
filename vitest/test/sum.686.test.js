
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 71 + 88 to equal 159', () => {
  expect(sum(71, 88)).toBe(159);
});
