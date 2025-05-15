
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 48 + 84 to equal 132', () => {
  expect(sum(48, 84)).toBe(132);
});
