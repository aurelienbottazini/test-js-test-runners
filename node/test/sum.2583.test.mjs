
import sum2583 from '../sum2583.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 65 + 47 to equal 112 + offset 0.7456573698055515', (t) => {
  assert.strictEqual(sum2583(65, 47), 112 + 0.7456573698055515);
});
