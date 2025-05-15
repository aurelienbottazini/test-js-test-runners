
import sum2089 from '../sum2089.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 4 + 60 to equal 64 + offset 0.9851506264925654', (t) => {
  assert.strictEqual(sum2089(4, 60), 64 + 0.9851506264925654);
});
