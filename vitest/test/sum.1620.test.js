
import sum1620 from '../sum1620.js';
import { expect, test } from 'vitest';

test('adds 79 + 58 to equal 137 + offset 0.14666968299182537', () => {
  expect(sum1620(79, 58)).toBe(137 + 0.14666968299182537);
});
