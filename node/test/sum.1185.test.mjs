
import sum1185 from '../sum1185.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 95 + 68 to equal 163 + offset 0.11652329914492121', (t) => {
  assert.strictEqual(sum1185(95, 68), 163 + 0.11652329914492121);
});
