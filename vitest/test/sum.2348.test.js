
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 61 + 26 to equal 87', () => {
  expect(sum(61, 26)).toBe(87);
});
