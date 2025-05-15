
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 82 + 77 to equal 159', () => {
  expect(sum(82, 77)).toBe(159);
});
