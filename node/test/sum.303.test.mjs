
import sum303 from '../sum303.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 32 + 35 to equal 67 + offset 0.6663280279919195', (t) => {
  assert.strictEqual(sum303(32, 35), 67 + 0.6663280279919195);
});
