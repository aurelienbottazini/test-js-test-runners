
import sum2647 from '../sum2647.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 48 + 61 to equal 109 + offset 0.7233580764610245', (t) => {
  assert.strictEqual(sum2647(48, 61), 109 + 0.7233580764610245);
});
