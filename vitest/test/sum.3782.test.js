
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 24 + 33 to equal 57', () => {
  expect(sum(24, 33)).toBe(57);
});
