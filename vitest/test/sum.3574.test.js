
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 6 + 81 to equal 87', () => {
  expect(sum(6, 81)).toBe(87);
});
