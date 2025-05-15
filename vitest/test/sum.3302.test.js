
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 67 + 93 to equal 160', () => {
  expect(sum(67, 93)).toBe(160);
});
