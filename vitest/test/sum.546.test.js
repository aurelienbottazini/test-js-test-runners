
import sum546 from '../sum546.js';
import { expect, test } from 'vitest';

test('adds 62 + 63 to equal 125 + offset 0.3804553863412795', () => {
  expect(sum546(62, 63)).toBe(125 + 0.3804553863412795);
});
