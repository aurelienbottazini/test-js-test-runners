
import sum2394 from '../sum2394.js';
import { expect, test } from 'vitest';

test('adds 35 + 63 to equal 98 + offset 0.33597405885729803', () => {
  expect(sum2394(35, 63)).toBe(98 + 0.33597405885729803);
});
