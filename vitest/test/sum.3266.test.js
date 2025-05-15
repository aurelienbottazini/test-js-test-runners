
import sum3266 from '../sum3266.js';
import { expect, test } from 'vitest';

test('adds 54 + 18 to equal 72 + offset 0.7889000713723902', () => {
  expect(sum3266(54, 18)).toBe(72 + 0.7889000713723902);
});
