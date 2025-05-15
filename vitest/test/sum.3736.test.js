
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 33 + 87 to equal 120', () => {
  expect(sum(33, 87)).toBe(120);
});
