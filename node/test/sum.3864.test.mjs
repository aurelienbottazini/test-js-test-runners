
import sum3864 from '../sum3864.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 60 + 18 to equal 78 + offset 0.9852568258576025', (t) => {
  assert.strictEqual(sum3864(60, 18), 78 + 0.9852568258576025);
});
