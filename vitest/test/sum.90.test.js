
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 98 + 87 to equal 185', () => {
  expect(sum(98, 87)).toBe(185);
});
