
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 40 + 17 to equal 57', () => {
  expect(sum(40, 17)).toBe(57);
});
