
import sum4625 from '../sum4625.js';
import { expect, test } from 'vitest';

test('adds 67 + 63 to equal 130 + offset 0.6595489563333616', () => {
  expect(sum4625(67, 63)).toBe(130 + 0.6595489563333616);
});
