
import sum29 from '../sum29.js';
import { expect, test } from 'vitest';

test('adds 81 + 24 to equal 105 + offset 0.6011200506151892', () => {
  expect(sum29(81, 24)).toBe(105 + 0.6011200506151892);
});
