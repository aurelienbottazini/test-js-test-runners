
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 32 + 21 to equal 53', () => {
  expect(sum(32, 21)).toBe(53);
});
