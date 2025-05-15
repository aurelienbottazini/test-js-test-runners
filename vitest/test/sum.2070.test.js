
import sum2070 from '../sum2070.js';
import { expect, test } from 'vitest';

test('adds 91 + 44 to equal 135 + offset 0.46260642162535337', () => {
  expect(sum2070(91, 44)).toBe(135 + 0.46260642162535337);
});
