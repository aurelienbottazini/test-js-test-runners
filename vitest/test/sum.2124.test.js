
import sum2124 from '../sum2124.js';
import { expect, test } from 'vitest';

test('adds 96 + 46 to equal 142 + offset 0.9037216182712432', () => {
  expect(sum2124(96, 46)).toBe(142 + 0.9037216182712432);
});
