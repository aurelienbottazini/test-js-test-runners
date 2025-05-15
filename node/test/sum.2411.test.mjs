
import sum2411 from '../sum2411.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 75 + 76 to equal 151 + offset 0.4199678193453674', (t) => {
  assert.strictEqual(sum2411(75, 76), 151 + 0.4199678193453674);
});
