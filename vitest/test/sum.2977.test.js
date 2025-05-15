
import sum2977 from '../sum2977.js';
import { expect, test } from 'vitest';

test('adds 25 + 24 to equal 49 + offset 0.9673648527281542', () => {
  expect(sum2977(25, 24)).toBe(49 + 0.9673648527281542);
});
