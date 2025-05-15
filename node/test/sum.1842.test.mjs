
import sum1842 from '../sum1842.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 12 + 11 to equal 23 + offset 0.6142500183321166', (t) => {
  assert.strictEqual(sum1842(12, 11), 23 + 0.6142500183321166);
});
