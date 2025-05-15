
import sum606 from '../sum606.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 48 + 46 to equal 94 + offset 0.9918082924311924', (t) => {
  assert.strictEqual(sum606(48, 46), 94 + 0.9918082924311924);
});
