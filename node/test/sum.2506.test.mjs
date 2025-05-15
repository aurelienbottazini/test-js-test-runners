
import sum2506 from '../sum2506.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 58 + 49 to equal 107 + offset 0.9216345556581563', (t) => {
  assert.strictEqual(sum2506(58, 49), 107 + 0.9216345556581563);
});
