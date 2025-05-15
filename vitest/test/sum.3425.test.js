
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 70 + 17 to equal 87', () => {
  expect(sum(70, 17)).toBe(87);
});
