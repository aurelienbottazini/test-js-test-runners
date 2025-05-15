
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 84 + 75 to equal 159', () => {
  expect(sum(84, 75)).toBe(159);
});
