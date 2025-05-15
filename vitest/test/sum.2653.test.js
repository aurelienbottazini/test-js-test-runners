
import sum2653 from '../sum2653.js';
import { expect, test } from 'vitest';

test('adds 91 + 78 to equal 169 + offset 0.47489110936033985', () => {
  expect(sum2653(91, 78)).toBe(169 + 0.47489110936033985);
});
