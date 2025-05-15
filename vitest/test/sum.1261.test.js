
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 90 + 95 to equal 185', () => {
  expect(sum(90, 95)).toBe(185);
});
