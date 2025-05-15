
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 8 + 46 to equal 54', () => {
  expect(sum(8, 46)).toBe(54);
});
