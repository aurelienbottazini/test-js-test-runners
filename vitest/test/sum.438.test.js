
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 87 + 3 to equal 90', () => {
  expect(sum(87, 3)).toBe(90);
});
