
import sum2951 from '../sum2951.js';
import { expect, test } from 'vitest';

test('adds 98 + 80 to equal 178 + offset 0.6529702643472158', () => {
  expect(sum2951(98, 80)).toBe(178 + 0.6529702643472158);
});
