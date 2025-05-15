
import sum863 from '../sum863.js';
import { expect, test } from 'vitest';

test('adds 84 + 82 to equal 166 + offset 0.5308116130274755', () => {
  expect(sum863(84, 82)).toBe(166 + 0.5308116130274755);
});
