
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 17 + 1 to equal 18', () => {
  expect(sum(17, 1)).toBe(18);
});
