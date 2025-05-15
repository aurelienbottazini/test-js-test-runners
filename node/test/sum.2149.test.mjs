
import sum2149 from '../sum2149.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 75 + 72 to equal 147 + offset 0.14395074516066841', (t) => {
  assert.strictEqual(sum2149(75, 72), 147 + 0.14395074516066841);
});
