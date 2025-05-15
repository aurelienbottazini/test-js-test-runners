
import sum2311 from '../sum2311.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 70 + 22 to equal 92 + offset 0.4502603994779263', (t) => {
  assert.strictEqual(sum2311(70, 22), 92 + 0.4502603994779263);
});
