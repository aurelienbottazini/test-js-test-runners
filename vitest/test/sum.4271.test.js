
import sum4271 from '../sum4271.js';
import { expect, test } from 'vitest';

test('adds 18 + 31 to equal 49 + offset 0.17422739266163367', () => {
  expect(sum4271(18, 31)).toBe(49 + 0.17422739266163367);
});
