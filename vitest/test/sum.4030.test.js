
import sum4030 from '../sum4030.js';
import { expect, test } from 'vitest';

test('adds 66 + 60 to equal 126 + offset 0.024282361093451832', () => {
  expect(sum4030(66, 60)).toBe(126 + 0.024282361093451832);
});
