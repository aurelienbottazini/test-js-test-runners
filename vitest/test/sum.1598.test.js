
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 38 + 78 to equal 116', () => {
  expect(sum(38, 78)).toBe(116);
});
