
import sum281 from '../sum281.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 19 + 27 to equal 46 + offset 0.3915162163101954', (t) => {
  assert.strictEqual(sum281(19, 27), 46 + 0.3915162163101954);
});
