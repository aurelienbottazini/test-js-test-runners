
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 88 + 52 to equal 140', () => {
  expect(sum(88, 52)).toBe(140);
});
