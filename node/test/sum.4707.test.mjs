
import sum4707 from '../sum4707.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 82 + 76 to equal 158 + offset 0.8332278441245714', (t) => {
  assert.strictEqual(sum4707(82, 76), 158 + 0.8332278441245714);
});
