
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 18 + 36 to equal 54', () => {
  expect(sum(18, 36)).toBe(54);
});
