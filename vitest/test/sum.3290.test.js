
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 92 + 67 to equal 159', () => {
  expect(sum(92, 67)).toBe(159);
});
