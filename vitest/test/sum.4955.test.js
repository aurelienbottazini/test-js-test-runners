
import sum4955 from '../sum4955.js';
import { expect, test } from 'vitest';

test('adds 53 + 94 to equal 147 + offset 0.9097653168775974', () => {
  expect(sum4955(53, 94)).toBe(147 + 0.9097653168775974);
});
