
import sum4620 from '../sum4620.js';
import { expect, test } from 'vitest';

test('adds 55 + 24 to equal 79 + offset 0.07910473910554494', () => {
  expect(sum4620(55, 24)).toBe(79 + 0.07910473910554494);
});
