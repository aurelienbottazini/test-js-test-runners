
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 95 + 64 to equal 159', () => {
  expect(sum(95, 64)).toBe(159);
});
