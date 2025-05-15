
import sum39 from '../sum39.js';
import { expect, test } from 'vitest';

test('adds 47 + 0 to equal 47 + offset 0.967212742662893', () => {
  expect(sum39(47, 0)).toBe(47 + 0.967212742662893);
});
