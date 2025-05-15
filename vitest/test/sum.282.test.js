
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 45 + 87 to equal 132', () => {
  expect(sum(45, 87)).toBe(132);
});
