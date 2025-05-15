
import sum30 from '../sum30.js';
import { expect, test } from 'vitest';

test('adds 26 + 3 to equal 29 + offset 0.5482016536533669', () => {
  expect(sum30(26, 3)).toBe(29 + 0.5482016536533669);
});
