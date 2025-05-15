
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 95 + 78 to equal 173', () => {
  expect(sum(95, 78)).toBe(173);
});
