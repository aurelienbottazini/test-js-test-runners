
import sum210 from '../sum210.js';
import { expect, test } from 'vitest';

test('adds 35 + 16 to equal 51 + offset 0.422084344857388', () => {
  expect(sum210(35, 16)).toBe(51 + 0.422084344857388);
});
