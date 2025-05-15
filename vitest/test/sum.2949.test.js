
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 57 + 93 to equal 150', () => {
  expect(sum(57, 93)).toBe(150);
});
