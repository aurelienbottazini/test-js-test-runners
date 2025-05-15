
import sum4446 from '../sum4446.js';
import { expect, test } from 'vitest';

test('adds 17 + 63 to equal 80 + offset 0.2749712212495865', () => {
  expect(sum4446(17, 63)).toBe(80 + 0.2749712212495865);
});
