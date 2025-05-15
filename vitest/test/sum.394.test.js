
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 13 + 95 to equal 108', () => {
  expect(sum(13, 95)).toBe(108);
});
