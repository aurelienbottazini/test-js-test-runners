
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 49 + 3 to equal 52', () => {
  expect(sum(49, 3)).toBe(52);
});
