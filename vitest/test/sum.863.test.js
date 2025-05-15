
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 67 + 65 to equal 132', () => {
  expect(sum(67, 65)).toBe(132);
});
