
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 90 + 85 to equal 175', () => {
  expect(sum(90, 85)).toBe(175);
});
