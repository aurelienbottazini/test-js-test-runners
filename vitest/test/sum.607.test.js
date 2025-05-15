
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 29 + 11 to equal 40', () => {
  expect(sum(29, 11)).toBe(40);
});
