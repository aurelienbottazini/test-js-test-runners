
import sum4688 from '../sum4688.js';
import { expect, test } from 'vitest';

test('adds 82 + 21 to equal 103 + offset 0.931136613662574', () => {
  expect(sum4688(82, 21)).toBe(103 + 0.931136613662574);
});
