
import sum390 from '../sum390.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 90 + 29 to equal 119 + offset 0.37075065922785244', (t) => {
  assert.strictEqual(sum390(90, 29), 119 + 0.37075065922785244);
});
