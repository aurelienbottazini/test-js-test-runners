
import sum2893 from '../sum2893.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 68 + 84 to equal 152 + offset 0.492397431012231', (t) => {
  assert.strictEqual(sum2893(68, 84), 152 + 0.492397431012231);
});
