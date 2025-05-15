
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 15 + 32 to equal 47', () => {
  expect(sum(15, 32)).toBe(47);
});
