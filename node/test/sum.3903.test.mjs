
import sum3903 from '../sum3903.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 92 + 24 to equal 116 + offset 0.3326711087824793', (t) => {
  assert.strictEqual(sum3903(92, 24), 116 + 0.3326711087824793);
});
