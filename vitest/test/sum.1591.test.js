
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 69 + 18 to equal 87', () => {
  expect(sum(69, 18)).toBe(87);
});
