
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 30 + 54 to equal 84', () => {
  expect(sum(30, 54)).toBe(84);
});
