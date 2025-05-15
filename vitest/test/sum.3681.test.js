
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 36 + 85 to equal 121', () => {
  expect(sum(36, 85)).toBe(121);
});
