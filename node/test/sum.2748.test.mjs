
import sum2748 from '../sum2748.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 66 + 43 to equal 109 + offset 0.8686293477032762', (t) => {
  assert.strictEqual(sum2748(66, 43), 109 + 0.8686293477032762);
});
