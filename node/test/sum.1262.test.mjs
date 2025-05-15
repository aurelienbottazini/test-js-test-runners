
import sum1262 from '../sum1262.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 3 + 37 to equal 40 + offset 0.20223407654051961', (t) => {
  assert.strictEqual(sum1262(3, 37), 40 + 0.20223407654051961);
});
