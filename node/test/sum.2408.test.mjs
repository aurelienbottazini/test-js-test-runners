
import sum2408 from '../sum2408.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 42 + 51 to equal 93 + offset 0.33503994099491774', (t) => {
  assert.strictEqual(sum2408(42, 51), 93 + 0.33503994099491774);
});
