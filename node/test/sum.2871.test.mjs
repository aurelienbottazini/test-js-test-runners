
import sum2871 from '../sum2871.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 63 + 30 to equal 93 + offset 0.4122799074811563', (t) => {
  assert.strictEqual(sum2871(63, 30), 93 + 0.4122799074811563);
});
