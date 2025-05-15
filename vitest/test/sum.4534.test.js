
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 16 + 33 to equal 49', () => {
  expect(sum(16, 33)).toBe(49);
});
