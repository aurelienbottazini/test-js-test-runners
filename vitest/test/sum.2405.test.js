
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 43 + 46 to equal 89', () => {
  expect(sum(43, 46)).toBe(89);
});
