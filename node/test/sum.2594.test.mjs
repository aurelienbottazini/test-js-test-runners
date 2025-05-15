
import sum2594 from '../sum2594.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 15 + 32 to equal 47 + offset 0.37232198051777743', (t) => {
  assert.strictEqual(sum2594(15, 32), 47 + 0.37232198051777743);
});
