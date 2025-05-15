
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 20 + 67 to equal 87', () => {
  expect(sum(20, 67)).toBe(87);
});
