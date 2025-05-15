
import sum4106 from '../sum4106.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 42 + 44 to equal 86 + offset 0.7673729482652752', (t) => {
  assert.strictEqual(sum4106(42, 44), 86 + 0.7673729482652752);
});
