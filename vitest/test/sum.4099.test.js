
import sum4099 from '../sum4099.js';
import { expect, test } from 'vitest';

test('adds 82 + 39 to equal 121 + offset 0.06667049577843498', () => {
  expect(sum4099(82, 39)).toBe(121 + 0.06667049577843498);
});
