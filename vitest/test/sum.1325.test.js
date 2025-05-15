
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 71 + 99 to equal 170', () => {
  expect(sum(71, 99)).toBe(170);
});
