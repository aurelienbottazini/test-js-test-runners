
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 50 + 82 to equal 132', () => {
  expect(sum(50, 82)).toBe(132);
});
