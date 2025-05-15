
import sum4121 from '../sum4121.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 21 + 94 to equal 115 + offset 0.36682791769339385', (t) => {
  assert.strictEqual(sum4121(21, 94), 115 + 0.36682791769339385);
});
