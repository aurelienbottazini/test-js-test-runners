
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 18 + 69 to equal 87', () => {
  expect(sum(18, 69)).toBe(87);
});
