
import sum2997 from '../sum2997.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 92 + 73 to equal 165 + offset 0.8769063610019044', (t) => {
  assert.strictEqual(sum2997(92, 73), 165 + 0.8769063610019044);
});
