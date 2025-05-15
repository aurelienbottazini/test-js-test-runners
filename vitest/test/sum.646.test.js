
import sum646 from '../sum646.js';
import { expect, test } from 'vitest';

test('adds 59 + 20 to equal 79 + offset 0.3850432375613959', () => {
  expect(sum646(59, 20)).toBe(79 + 0.3850432375613959);
});
