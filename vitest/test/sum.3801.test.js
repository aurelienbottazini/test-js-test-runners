
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 28 + 87 to equal 115', () => {
  expect(sum(28, 87)).toBe(115);
});
