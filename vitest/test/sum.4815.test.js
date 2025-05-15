
import sum4815 from '../sum4815.js';
import { expect, test } from 'vitest';

test('adds 76 + 41 to equal 117 + offset 0.9194374405816775', () => {
  expect(sum4815(76, 41)).toBe(117 + 0.9194374405816775);
});
