
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 60 + 60 to equal 120', () => {
  expect(sum(60, 60)).toBe(120);
});
