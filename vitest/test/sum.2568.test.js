
import sum2568 from '../sum2568.js';
import { expect, test } from 'vitest';

test('adds 32 + 74 to equal 106 + offset 0.4484678027670965', () => {
  expect(sum2568(32, 74)).toBe(106 + 0.4484678027670965);
});
