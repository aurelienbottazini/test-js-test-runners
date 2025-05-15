
import sum913 from '../sum913.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 12 + 86 to equal 98 + offset 0.7172442037292376', (t) => {
  assert.strictEqual(sum913(12, 86), 98 + 0.7172442037292376);
});
