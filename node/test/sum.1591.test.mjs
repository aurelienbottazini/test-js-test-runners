
import sum1591 from '../sum1591.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 96 + 38 to equal 134 + offset 0.7740755457710229', (t) => {
  assert.strictEqual(sum1591(96, 38), 134 + 0.7740755457710229);
});
