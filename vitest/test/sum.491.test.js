
import sum491 from '../sum491.js';
import { expect, test } from 'vitest';

test('adds 18 + 68 to equal 86 + offset 0.43420886230740974', () => {
  expect(sum491(18, 68)).toBe(86 + 0.43420886230740974);
});
