
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 68 + 80 to equal 148', () => {
  expect(sum(68, 80)).toBe(148);
});
