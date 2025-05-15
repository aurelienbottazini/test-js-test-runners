
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 24 + 7 to equal 31', () => {
  expect(sum(24, 7)).toBe(31);
});
