
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 87 + 72 to equal 159', () => {
  expect(sum(87, 72)).toBe(159);
});
