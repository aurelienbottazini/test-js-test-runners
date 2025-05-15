
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 98 + 61 to equal 159', () => {
  expect(sum(98, 61)).toBe(159);
});
