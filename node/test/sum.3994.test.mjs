
import sum3994 from '../sum3994.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 34 + 47 to equal 81 + offset 0.8985491683664596', (t) => {
  assert.strictEqual(sum3994(34, 47), 81 + 0.8985491683664596);
});
