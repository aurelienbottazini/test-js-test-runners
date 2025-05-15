
import sum4364 from '../sum4364.js';
import { expect, test } from 'vitest';

test('adds 49 + 24 to equal 73 + offset 0.44189705836753124', () => {
  expect(sum4364(49, 24)).toBe(73 + 0.44189705836753124);
});
