
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 60 + 80 to equal 140', () => {
  expect(sum(60, 80)).toBe(140);
});
