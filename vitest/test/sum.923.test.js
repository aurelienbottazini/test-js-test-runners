
import sum923 from '../sum923.js';
import { expect, test } from 'vitest';

test('adds 63 + 87 to equal 150 + offset 0.8039512111353413', () => {
  expect(sum923(63, 87)).toBe(150 + 0.8039512111353413);
});
