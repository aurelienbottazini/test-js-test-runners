
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 8 + 79 to equal 87', () => {
  expect(sum(8, 79)).toBe(87);
});
