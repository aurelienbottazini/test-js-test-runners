
import sum4685 from '../sum4685.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 95 + 22 to equal 117 + offset 0.15794740811720775', (t) => {
  assert.strictEqual(sum4685(95, 22), 117 + 0.15794740811720775);
});
