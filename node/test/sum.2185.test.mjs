
import sum2185 from '../sum2185.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 26 + 68 to equal 94 + offset 0.49489850307429817', (t) => {
  assert.strictEqual(sum2185(26, 68), 94 + 0.49489850307429817);
});
