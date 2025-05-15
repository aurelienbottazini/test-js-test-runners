
import sum2960 from '../sum2960.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 97 + 0 to equal 97 + offset 0.8929112089117004', (t) => {
  assert.strictEqual(sum2960(97, 0), 97 + 0.8929112089117004);
});
