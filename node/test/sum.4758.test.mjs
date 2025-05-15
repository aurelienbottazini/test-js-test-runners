
import sum4758 from '../sum4758.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 54 + 95 to equal 149 + offset 0.26337662211090074', (t) => {
  assert.strictEqual(sum4758(54, 95), 149 + 0.26337662211090074);
});
