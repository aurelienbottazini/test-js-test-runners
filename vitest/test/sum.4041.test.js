
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 18 + 74 to equal 92', () => {
  expect(sum(18, 74)).toBe(92);
});
