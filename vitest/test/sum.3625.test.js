
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 31 + 26 to equal 57', () => {
  expect(sum(31, 26)).toBe(57);
});
