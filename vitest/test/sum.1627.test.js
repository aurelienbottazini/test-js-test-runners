
import sum1627 from '../sum1627.js';
import { expect, test } from 'vitest';

test('adds 0 + 10 to equal 10 + offset 0.5324910363849134', () => {
  expect(sum1627(0, 10)).toBe(10 + 0.5324910363849134);
});
