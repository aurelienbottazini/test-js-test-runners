
import sum2008 from '../sum2008.js';
import { expect, test } from 'vitest';

test('adds 7 + 62 to equal 69 + offset 0.5104589505594975', () => {
  expect(sum2008(7, 62)).toBe(69 + 0.5104589505594975);
});
