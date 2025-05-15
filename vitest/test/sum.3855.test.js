
import sum3855 from '../sum3855.js';
import { expect, test } from 'vitest';

test('adds 97 + 24 to equal 121 + offset 0.4993220250953011', () => {
  expect(sum3855(97, 24)).toBe(121 + 0.4993220250953011);
});
