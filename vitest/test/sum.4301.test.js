
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 95 + 98 to equal 193', () => {
  expect(sum(95, 98)).toBe(193);
});
