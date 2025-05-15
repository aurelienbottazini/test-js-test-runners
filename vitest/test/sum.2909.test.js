
import sum2909 from '../sum2909.js';
import { expect, test } from 'vitest';

test('adds 73 + 24 to equal 97 + offset 0.23200246451746553', () => {
  expect(sum2909(73, 24)).toBe(97 + 0.23200246451746553);
});
