
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 28 + 29 to equal 57', () => {
  expect(sum(28, 29)).toBe(57);
});
