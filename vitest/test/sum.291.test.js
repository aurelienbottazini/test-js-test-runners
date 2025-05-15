
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 87 + 88 to equal 175', () => {
  expect(sum(87, 88)).toBe(175);
});
