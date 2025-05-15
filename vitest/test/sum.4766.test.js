
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 92 + 78 to equal 170', () => {
  expect(sum(92, 78)).toBe(170);
});
