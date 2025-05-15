
import sum2558 from '../sum2558.js';
import { expect, test } from 'vitest';

test('adds 38 + 24 to equal 62 + offset 0.33753276400109444', () => {
  expect(sum2558(38, 24)).toBe(62 + 0.33753276400109444);
});
