
import sum465 from '../sum465.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 16 + 9 to equal 25 + offset 0.23112380970392987', (t) => {
  assert.strictEqual(sum465(16, 9), 25 + 0.23112380970392987);
});
