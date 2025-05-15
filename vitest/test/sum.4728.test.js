
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 77 + 82 to equal 159', () => {
  expect(sum(77, 82)).toBe(159);
});
