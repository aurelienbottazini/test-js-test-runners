
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 6 + 84 to equal 90', () => {
  expect(sum(6, 84)).toBe(90);
});
