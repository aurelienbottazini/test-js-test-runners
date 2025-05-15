
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 97 + 70 to equal 167', () => {
  expect(sum(97, 70)).toBe(167);
});
