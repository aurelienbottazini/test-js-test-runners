
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 91 + 68 to equal 159', () => {
  expect(sum(91, 68)).toBe(159);
});
