
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 18 + 9 to equal 27', () => {
  expect(sum(18, 9)).toBe(27);
});
