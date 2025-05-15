
import sum2649 from '../sum2649.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 53 + 66 to equal 119 + offset 0.6351369026334002', (t) => {
  assert.strictEqual(sum2649(53, 66), 119 + 0.6351369026334002);
});
