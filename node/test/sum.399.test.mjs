
import sum399 from '../sum399.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 47 + 35 to equal 82 + offset 0.62036320398958', (t) => {
  assert.strictEqual(sum399(47, 35), 82 + 0.62036320398958);
});
