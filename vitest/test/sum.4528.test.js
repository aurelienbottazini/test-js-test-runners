
import sum4528 from '../sum4528.js';
import { expect, test } from 'vitest';

test('adds 51 + 24 to equal 75 + offset 0.731931570462965', () => {
  expect(sum4528(51, 24)).toBe(75 + 0.731931570462965);
});
