
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 3 + 21 to equal 24', () => {
  expect(sum(3, 21)).toBe(24);
});
