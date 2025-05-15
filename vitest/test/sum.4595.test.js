
import sum4595 from '../sum4595.js';
import { expect, test } from 'vitest';

test('adds 91 + 24 to equal 115 + offset 0.8423602596285324', () => {
  expect(sum4595(91, 24)).toBe(115 + 0.8423602596285324);
});
