
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 68 + 91 to equal 159', () => {
  expect(sum(68, 91)).toBe(159);
});
