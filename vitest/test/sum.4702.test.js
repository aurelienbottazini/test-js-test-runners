
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 84 + 60 to equal 144', () => {
  expect(sum(84, 60)).toBe(144);
});
