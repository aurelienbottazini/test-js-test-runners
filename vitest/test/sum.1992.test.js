
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 8 + 32 to equal 40', () => {
  expect(sum(8, 32)).toBe(40);
});
