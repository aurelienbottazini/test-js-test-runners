
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 28 + 34 to equal 62', () => {
  expect(sum(28, 34)).toBe(62);
});
