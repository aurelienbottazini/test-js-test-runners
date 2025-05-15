
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 9 + 46 to equal 55', () => {
  expect(sum(9, 46)).toBe(55);
});
