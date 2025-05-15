
import sum2391 from '../sum2391.js';
import { expect, test } from 'vitest';

test('adds 49 + 46 to equal 95 + offset 0.04704833258201713', () => {
  expect(sum2391(49, 46)).toBe(95 + 0.04704833258201713);
});
