
import sum3724 from '../sum3724.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 67 + 5 to equal 72 + offset 0.7733980901507143', (t) => {
  assert.strictEqual(sum3724(67, 5), 72 + 0.7733980901507143);
});
