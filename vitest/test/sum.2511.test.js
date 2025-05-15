
import sum2511 from '../sum2511.js';
import { expect, test } from 'vitest';

test('adds 92 + 49 to equal 141 + offset 0.34146258432925514', () => {
  expect(sum2511(92, 49)).toBe(141 + 0.34146258432925514);
});
