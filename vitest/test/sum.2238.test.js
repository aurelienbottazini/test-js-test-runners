
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 90 + 86 to equal 176', () => {
  expect(sum(90, 86)).toBe(176);
});
