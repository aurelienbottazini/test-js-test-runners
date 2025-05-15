
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 22 + 25 to equal 47', () => {
  expect(sum(22, 25)).toBe(47);
});
