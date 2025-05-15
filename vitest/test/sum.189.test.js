
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 54 + 62 to equal 116', () => {
  expect(sum(54, 62)).toBe(116);
});
