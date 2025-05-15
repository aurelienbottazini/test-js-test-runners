
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 29 + 7 to equal 36', () => {
  expect(sum(29, 7)).toBe(36);
});
