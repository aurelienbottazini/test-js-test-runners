
import sum962 from '../sum962.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 40 + 69 to equal 109 + offset 0.47138901744910533', (t) => {
  assert.strictEqual(sum962(40, 69), 109 + 0.47138901744910533);
});
