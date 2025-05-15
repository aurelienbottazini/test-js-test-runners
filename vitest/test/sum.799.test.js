
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 17 + 40 to equal 57', () => {
  expect(sum(17, 40)).toBe(57);
});
