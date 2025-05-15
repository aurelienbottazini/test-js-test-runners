
import sum2108 from '../sum2108.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 15 + 90 to equal 105 + offset 0.4532520423165217', (t) => {
  assert.strictEqual(sum2108(15, 90), 105 + 0.4532520423165217);
});
