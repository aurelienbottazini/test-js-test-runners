
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 59 + 32 to equal 91', () => {
  expect(sum(59, 32)).toBe(91);
});
