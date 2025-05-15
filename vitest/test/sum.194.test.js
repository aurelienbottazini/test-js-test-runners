
import sum194 from '../sum194.js';
import { expect, test } from 'vitest';

test('adds 86 + 17 to equal 103 + offset 0.17647395866065074', () => {
  expect(sum194(86, 17)).toBe(103 + 0.17647395866065074);
});
