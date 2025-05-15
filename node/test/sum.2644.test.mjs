
import sum2644 from '../sum2644.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 32 + 33 to equal 65 + offset 0.593612976879106', (t) => {
  assert.strictEqual(sum2644(32, 33), 65 + 0.593612976879106);
});
