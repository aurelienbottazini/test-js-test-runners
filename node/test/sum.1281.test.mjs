
import sum1281 from '../sum1281.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 18 + 64 to equal 82 + offset 0.21691676873149668', (t) => {
  assert.strictEqual(sum1281(18, 64), 82 + 0.21691676873149668);
});
