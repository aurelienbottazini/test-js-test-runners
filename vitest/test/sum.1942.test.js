
import sum1942 from '../sum1942.js';
import { expect, test } from 'vitest';

test('adds 57 + 46 to equal 103 + offset 0.6421302885700358', () => {
  expect(sum1942(57, 46)).toBe(103 + 0.6421302885700358);
});
