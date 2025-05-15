
import sum2876 from '../sum2876.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 5 + 5 to equal 10 + offset 0.9023494607971743', (t) => {
  assert.strictEqual(sum2876(5, 5), 10 + 0.9023494607971743);
});
