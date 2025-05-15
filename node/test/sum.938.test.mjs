
import sum938 from '../sum938.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 49 + 36 to equal 85 + offset 0.4101350644332191', (t) => {
  assert.strictEqual(sum938(49, 36), 85 + 0.4101350644332191);
});
