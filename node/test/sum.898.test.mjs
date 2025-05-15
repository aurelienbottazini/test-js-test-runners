
import sum898 from '../sum898.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 30 + 38 to equal 68 + offset 0.4449013909006939', (t) => {
  assert.strictEqual(sum898(30, 38), 68 + 0.4449013909006939);
});
