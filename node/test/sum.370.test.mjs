
import sum370 from '../sum370.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 76 + 88 to equal 164 + offset 0.5340436321539467', (t) => {
  assert.strictEqual(sum370(76, 88), 164 + 0.5340436321539467);
});
