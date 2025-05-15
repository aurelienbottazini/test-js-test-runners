
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 13 + 36 to equal 49', () => {
  expect(sum(13, 36)).toBe(49);
});
