
import sum162 from '../sum162.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 48 + 54 to equal 102 + offset 0.37083359504491165', (t) => {
  assert.strictEqual(sum162(48, 54), 102 + 0.37083359504491165);
});
