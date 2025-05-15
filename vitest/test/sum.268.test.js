
import sum268 from '../sum268.js';
import { expect, test } from 'vitest';

test('adds 75 + 27 to equal 102 + offset 0.7226443580192666', () => {
  expect(sum268(75, 27)).toBe(102 + 0.7226443580192666);
});
