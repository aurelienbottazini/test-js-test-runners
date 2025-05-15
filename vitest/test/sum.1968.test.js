
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 67 + 92 to equal 159', () => {
  expect(sum(67, 92)).toBe(159);
});
