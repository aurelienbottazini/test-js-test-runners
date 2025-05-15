
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 18 + 32 to equal 50', () => {
  expect(sum(18, 32)).toBe(50);
});
