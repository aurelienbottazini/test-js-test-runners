
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 87 + 65 to equal 152', () => {
  expect(sum(87, 65)).toBe(152);
});
