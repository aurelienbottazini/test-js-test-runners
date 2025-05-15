
import sum718 from '../sum718.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 99 + 60 to equal 159 + offset 0.12423032250665578', (t) => {
  assert.strictEqual(sum718(99, 60), 159 + 0.12423032250665578);
});
