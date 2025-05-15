
import sum4882 from '../sum4882.js';
import { expect, test } from 'vitest';

test('adds 59 + 17 to equal 76 + offset 0.9428034159525324', () => {
  expect(sum4882(59, 17)).toBe(76 + 0.9428034159525324);
});
