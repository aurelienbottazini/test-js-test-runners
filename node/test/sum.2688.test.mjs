
import sum2688 from '../sum2688.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 32 + 17 to equal 49 + offset 0.09375541256794939', (t) => {
  assert.strictEqual(sum2688(32, 17), 49 + 0.09375541256794939);
});
