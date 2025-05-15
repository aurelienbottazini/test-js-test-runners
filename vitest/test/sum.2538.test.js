
import sum2538 from '../sum2538.js';
import { expect, test } from 'vitest';

test('adds 31 + 89 to equal 120 + offset 0.8777738025881163', () => {
  expect(sum2538(31, 89)).toBe(120 + 0.8777738025881163);
});
