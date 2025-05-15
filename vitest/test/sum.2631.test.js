
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 27 + 93 to equal 120', () => {
  expect(sum(27, 93)).toBe(120);
});
