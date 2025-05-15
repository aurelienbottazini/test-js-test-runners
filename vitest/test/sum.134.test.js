
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 54 + 78 to equal 132', () => {
  expect(sum(54, 78)).toBe(132);
});
