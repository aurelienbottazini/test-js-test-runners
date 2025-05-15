
import sum3679 from '../sum3679.js';
import { expect, test } from 'vitest';

test('adds 36 + 95 to equal 131 + offset 0.2921727770726643', () => {
  expect(sum3679(36, 95)).toBe(131 + 0.2921727770726643);
});
