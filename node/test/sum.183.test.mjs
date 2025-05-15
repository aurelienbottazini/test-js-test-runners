
import sum183 from '../sum183.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 88 + 33 to equal 121 + offset 0.6213872630168258', (t) => {
  assert.strictEqual(sum183(88, 33), 121 + 0.6213872630168258);
});
