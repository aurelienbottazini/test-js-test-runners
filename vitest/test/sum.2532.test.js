
import sum2532 from '../sum2532.js';
import { expect, test } from 'vitest';

test('adds 18 + 71 to equal 89 + offset 0.9510903855953855', () => {
  expect(sum2532(18, 71)).toBe(89 + 0.9510903855953855);
});
