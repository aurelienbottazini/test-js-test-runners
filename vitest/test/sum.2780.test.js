
import sum2780 from '../sum2780.js';
import { expect, test } from 'vitest';

test('adds 76 + 43 to equal 119 + offset 0.10739668768872157', () => {
  expect(sum2780(76, 43)).toBe(119 + 0.10739668768872157);
});
