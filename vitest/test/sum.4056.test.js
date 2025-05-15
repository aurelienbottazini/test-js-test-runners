
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 2 + 85 to equal 87', () => {
  expect(sum(2, 85)).toBe(87);
});
