
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 27 + 32 to equal 59', () => {
  expect(sum(27, 32)).toBe(59);
});
