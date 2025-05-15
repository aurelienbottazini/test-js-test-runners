
import sum4254 from '../sum4254.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 92 + 89 to equal 181 + offset 0.19681778317664922', (t) => {
  assert.strictEqual(sum4254(92, 89), 181 + 0.19681778317664922);
});
