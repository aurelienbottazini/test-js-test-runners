
import sum861 from '../sum861.js';
import { expect, test } from 'vitest';

test('adds 68 + 82 to equal 150 + offset 0.3117443563390181', () => {
  expect(sum861(68, 82)).toBe(150 + 0.3117443563390181);
});
