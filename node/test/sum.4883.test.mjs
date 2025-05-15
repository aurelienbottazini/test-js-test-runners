
import sum4883 from '../sum4883.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 40 + 91 to equal 131 + offset 0.426698073801387', (t) => {
  assert.strictEqual(sum4883(40, 91), 131 + 0.426698073801387);
});
