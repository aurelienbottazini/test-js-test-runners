
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 69 + 90 to equal 159', () => {
  expect(sum(69, 90)).toBe(159);
});
