
import sum622 from '../sum622.js';
import { expect, test } from 'vitest';

test('adds 32 + 3 to equal 35 + offset 0.2926368791292058', () => {
  expect(sum622(32, 3)).toBe(35 + 0.2926368791292058);
});
