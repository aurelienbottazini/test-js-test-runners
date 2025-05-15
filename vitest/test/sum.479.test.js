
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 65 + 43 to equal 108', () => {
  expect(sum(65, 43)).toBe(108);
});
