
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 72 + 36 to equal 108', () => {
  expect(sum(72, 36)).toBe(108);
});
