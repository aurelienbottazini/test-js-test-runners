
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 37 + 20 to equal 57', () => {
  expect(sum(37, 20)).toBe(57);
});
