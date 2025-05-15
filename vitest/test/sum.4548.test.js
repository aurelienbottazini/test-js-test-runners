
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 70 + 97 to equal 167', () => {
  expect(sum(70, 97)).toBe(167);
});
