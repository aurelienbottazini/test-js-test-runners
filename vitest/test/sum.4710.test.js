
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 4 + 36 to equal 40', () => {
  expect(sum(4, 36)).toBe(40);
});
