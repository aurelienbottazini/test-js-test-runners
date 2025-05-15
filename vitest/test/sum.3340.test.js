
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 80 + 87 to equal 167', () => {
  expect(sum(80, 87)).toBe(167);
});
