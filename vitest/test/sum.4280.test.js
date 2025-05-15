
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 70 + 83 to equal 153', () => {
  expect(sum(70, 83)).toBe(153);
});
