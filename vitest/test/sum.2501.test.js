
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 54 + 67 to equal 121', () => {
  expect(sum(54, 67)).toBe(121);
});
