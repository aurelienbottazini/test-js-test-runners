
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 24 + 29 to equal 53', () => {
  expect(sum(24, 29)).toBe(53);
});
