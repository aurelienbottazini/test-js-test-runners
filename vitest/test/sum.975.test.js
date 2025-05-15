
import sum975 from '../sum975.js';
import { expect, test } from 'vitest';

test('adds 76 + 54 to equal 130 + offset 0.939712253204526', () => {
  expect(sum975(76, 54)).toBe(130 + 0.939712253204526);
});
