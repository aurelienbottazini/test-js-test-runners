
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 85 + 91 to equal 176', () => {
  expect(sum(85, 91)).toBe(176);
});
