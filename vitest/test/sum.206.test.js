
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 87 + 66 to equal 153', () => {
  expect(sum(87, 66)).toBe(153);
});
