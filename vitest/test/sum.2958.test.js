
import sum2958 from '../sum2958.js';
import { expect, test } from 'vitest';

test('adds 57 + 24 to equal 81 + offset 0.03977020346897031', () => {
  expect(sum2958(57, 24)).toBe(81 + 0.03977020346897031);
});
