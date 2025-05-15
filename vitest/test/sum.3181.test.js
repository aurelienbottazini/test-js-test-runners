
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 85 + 36 to equal 121', () => {
  expect(sum(85, 36)).toBe(121);
});
