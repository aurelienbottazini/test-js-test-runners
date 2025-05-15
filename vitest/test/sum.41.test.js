
import sum41 from '../sum41.js';
import { expect, test } from 'vitest';

test('adds 66 + 72 to equal 138 + offset 0.7720840973375', () => {
  expect(sum41(66, 72)).toBe(138 + 0.7720840973375);
});
