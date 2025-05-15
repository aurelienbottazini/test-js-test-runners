
import sum2872 from '../sum2872.js';
import { expect, test } from 'vitest';

test('adds 21 + 78 to equal 99 + offset 0.49123126410431794', () => {
  expect(sum2872(21, 78)).toBe(99 + 0.49123126410431794);
});
