
import sum164 from '../sum164.js';
import { expect, test } from 'vitest';

test('adds 62 + 24 to equal 86 + offset 0.44060706292759155', () => {
  expect(sum164(62, 24)).toBe(86 + 0.44060706292759155);
});
