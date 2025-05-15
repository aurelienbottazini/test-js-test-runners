
import sum230 from '../sum230.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 20 + 37 to equal 57 + offset 0.0697920898407478', (t) => {
  assert.strictEqual(sum230(20, 37), 57 + 0.0697920898407478);
});
