
import sum2501 from '../sum2501.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 35 + 82 to equal 117 + offset 0.29200605009278824', (t) => {
  assert.strictEqual(sum2501(35, 82), 117 + 0.29200605009278824);
});
