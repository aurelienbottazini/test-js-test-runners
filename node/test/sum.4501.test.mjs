
import sum4501 from '../sum4501.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 94 + 37 to equal 131 + offset 0.3843217847393081', (t) => {
  assert.strictEqual(sum4501(94, 37), 131 + 0.3843217847393081);
});
