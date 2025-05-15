
import sum735 from '../sum735.js';
import { expect, test } from 'vitest';

test('adds 22 + 24 to equal 46 + offset 0.9754284619992593', () => {
  expect(sum735(22, 24)).toBe(46 + 0.9754284619992593);
});
