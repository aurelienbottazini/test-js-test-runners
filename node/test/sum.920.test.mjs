
import sum920 from '../sum920.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 33 + 69 to equal 102 + offset 0.1718801006043299', (t) => {
  assert.strictEqual(sum920(33, 69), 102 + 0.1718801006043299);
});
