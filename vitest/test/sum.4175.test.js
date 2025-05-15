
import sum4175 from '../sum4175.js';
import { expect, test } from 'vitest';

test('adds 61 + 30 to equal 91 + offset 0.7238113184110696', () => {
  expect(sum4175(61, 30)).toBe(91 + 0.7238113184110696);
});
