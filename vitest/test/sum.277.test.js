
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 71 + 16 to equal 87', () => {
  expect(sum(71, 16)).toBe(87);
});
