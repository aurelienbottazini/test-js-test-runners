
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 63 + 67 to equal 130', () => {
  expect(sum(63, 67)).toBe(130);
});
