
import sum967 from '../sum967.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 12 + 27 to equal 39 + offset 0.46506870662628574', (t) => {
  assert.strictEqual(sum967(12, 27), 39 + 0.46506870662628574);
});
