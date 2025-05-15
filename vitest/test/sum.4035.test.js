
import sum4035 from '../sum4035.js';
import { expect, test } from 'vitest';

test('adds 10 + 3 to equal 13 + offset 0.3383306583048358', () => {
  expect(sum4035(10, 3)).toBe(13 + 0.3383306583048358);
});
