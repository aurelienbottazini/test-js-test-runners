
import sum838 from '../sum838.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 92 + 76 to equal 168 + offset 0.4344179931505521', (t) => {
  assert.strictEqual(sum838(92, 76), 168 + 0.4344179931505521);
});
