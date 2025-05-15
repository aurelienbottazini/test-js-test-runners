
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 52 + 46 to equal 98', () => {
  expect(sum(52, 46)).toBe(98);
});
