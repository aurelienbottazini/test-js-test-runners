
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 15 + 3 to equal 18', () => {
  expect(sum(15, 3)).toBe(18);
});
