
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 38 + 82 to equal 120', () => {
  expect(sum(38, 82)).toBe(120);
});
