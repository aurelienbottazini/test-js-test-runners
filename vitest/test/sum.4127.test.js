
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 1 + 46 to equal 47', () => {
  expect(sum(1, 46)).toBe(47);
});
