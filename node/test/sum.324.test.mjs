
import sum324 from '../sum324.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 53 + 13 to equal 66 + offset 0.5966866246061336', (t) => {
  assert.strictEqual(sum324(53, 13), 66 + 0.5966866246061336);
});
