
import sum1992 from '../sum1992.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 59 + 69 to equal 128 + offset 0.7410994277567773', (t) => {
  assert.strictEqual(sum1992(59, 69), 128 + 0.7410994277567773);
});
