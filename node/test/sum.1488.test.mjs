
import sum1488 from '../sum1488.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 76 + 12 to equal 88 + offset 0.11368918104264958', (t) => {
  assert.strictEqual(sum1488(76, 12), 88 + 0.11368918104264958);
});
