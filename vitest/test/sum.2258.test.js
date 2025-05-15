
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 81 + 93 to equal 174', () => {
  expect(sum(81, 93)).toBe(174);
});
