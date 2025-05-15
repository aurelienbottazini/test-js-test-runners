
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 87 + 26 to equal 113', () => {
  expect(sum(87, 26)).toBe(113);
});
