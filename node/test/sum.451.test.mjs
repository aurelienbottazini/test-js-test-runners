
import sum451 from '../sum451.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 68 + 52 to equal 120 + offset 0.9262053691652169', (t) => {
  assert.strictEqual(sum451(68, 52), 120 + 0.9262053691652169);
});
