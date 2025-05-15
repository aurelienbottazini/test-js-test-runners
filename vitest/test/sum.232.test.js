
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 21 + 26 to equal 47', () => {
  expect(sum(21, 26)).toBe(47);
});
