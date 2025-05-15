
import sum2128 from '../sum2128.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 16 + 93 to equal 109 + offset 0.3621305858895495', (t) => {
  assert.strictEqual(sum2128(16, 93), 109 + 0.3621305858895495);
});
