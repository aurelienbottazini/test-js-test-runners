
import sum4094 from '../sum4094.js';
import { expect, test } from 'vitest';

test('adds 47 + 36 to equal 83 + offset 0.5012135089920245', () => {
  expect(sum4094(47, 36)).toBe(83 + 0.5012135089920245);
});
