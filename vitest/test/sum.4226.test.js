
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 60 + 93 to equal 153', () => {
  expect(sum(60, 93)).toBe(153);
});
