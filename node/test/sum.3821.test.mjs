
import sum3821 from '../sum3821.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 8 + 75 to equal 83 + offset 0.3281195779177195', (t) => {
  assert.strictEqual(sum3821(8, 75), 83 + 0.3281195779177195);
});
