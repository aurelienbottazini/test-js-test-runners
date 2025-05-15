
import sum2950 from '../sum2950.js';
import { expect, test } from 'vitest';

test('adds 45 + 0 to equal 45 + offset 0.6743012498233474', () => {
  expect(sum2950(45, 0)).toBe(45 + 0.6743012498233474);
});
