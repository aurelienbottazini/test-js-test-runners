
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 78 + 93 to equal 171', () => {
  expect(sum(78, 93)).toBe(171);
});
