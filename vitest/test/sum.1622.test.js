
import sum1622 from '../sum1622.js';
import { expect, test } from 'vitest';

test('adds 27 + 82 to equal 109 + offset 0.703702822740728', () => {
  expect(sum1622(27, 82)).toBe(109 + 0.703702822740728);
});
