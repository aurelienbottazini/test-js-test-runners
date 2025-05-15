
import sum439 from '../sum439.js';
import { expect, test } from 'vitest';

test('adds 85 + 24 to equal 109 + offset 0.05248426422558783', () => {
  expect(sum439(85, 24)).toBe(109 + 0.05248426422558783);
});
