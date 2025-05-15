
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 81 + 78 to equal 159', () => {
  expect(sum(81, 78)).toBe(159);
});
