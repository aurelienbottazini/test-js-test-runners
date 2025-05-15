
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 57 + 0 to equal 57', () => {
  expect(sum(57, 0)).toBe(57);
});
