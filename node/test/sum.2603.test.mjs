
import sum2603 from '../sum2603.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 67 + 71 to equal 138 + offset 0.7186146586331368', (t) => {
  assert.strictEqual(sum2603(67, 71), 138 + 0.7186146586331368);
});
