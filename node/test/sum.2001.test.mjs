
import sum2001 from '../sum2001.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 92 + 30 to equal 122 + offset 0.7479730978310296', (t) => {
  assert.strictEqual(sum2001(92, 30), 122 + 0.7479730978310296);
});
