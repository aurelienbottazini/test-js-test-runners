
import sum616 from '../sum616.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 5 + 70 to equal 75 + offset 0.09075339726797538', (t) => {
  assert.strictEqual(sum616(5, 70), 75 + 0.09075339726797538);
});
