
import sum1962 from '../sum1962.js';
import { expect, test } from 'vitest';

test('adds 59 + 51 to equal 110 + offset 0.8719880334882651', () => {
  expect(sum1962(59, 51)).toBe(110 + 0.8719880334882651);
});
