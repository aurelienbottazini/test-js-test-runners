
import sum4743 from '../sum4743.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 81 + 0 to equal 81 + offset 0.9763309005859314', (t) => {
  assert.strictEqual(sum4743(81, 0), 81 + 0.9763309005859314);
});
