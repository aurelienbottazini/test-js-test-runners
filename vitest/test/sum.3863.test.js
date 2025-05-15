
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 70 + 46 to equal 116', () => {
  expect(sum(70, 46)).toBe(116);
});
